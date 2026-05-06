import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../redux/utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          placeholder="Post message"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

/* const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} key={p.id || p.message} likesCount={p.likesCount} />
  ));
  // let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}; */
class MyPosts extends React.PureComponent {
  //let newPostElement = React.createRef(); // если понадобится, можно раскомментировать
  // this.newPostElement = React.createRef();

  onAddPost = (values) => {
    this.props.addPost(values.newPostText);
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ a: 12 });
  //   }, 3000);
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }
  render() {
    let postsElement = this.props.posts.map((p) => (
      <Post message={p.message} key={p.id || p.message} likesCount={p.likesCount} />
    ));
    let newPostElement = React.createRef(); // если понадобится, можно раскомментировать

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={this.onAddPost} />
        <div className={s.posts}>{postsElement}</div>
      </div>
    );
  }
}
export default MyPosts;
