import { Component, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, Provider } from 'react-redux'; // Импортируем connect из 'react-redux'
import { compose } from 'redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import React from 'react';
import store from './redux/redux-store';
import { withSuspense } from './components/hoc/withSuspense';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              {/* <Route path="/dialogs/*" element={<DialogsContainer />} /> */}
              <Route path="/dialogs/*" render={withSuspense(DialogsContainer)} />
              {/* <Route path="/profile/:userId?" element={<ProfileContainer />} /> */}
              <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login/*" element={<LoginPage />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/" element={<ProfileContainer />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

// mapStateToProps может быть null, если не нужны данные из store
const mapStateToProps = (state) => ({ initialized: state.app.initialized });

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
const SamuraiJSApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default SamuraiJSApp;
