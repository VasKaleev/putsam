import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

// const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
// const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        // isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  // debugger;
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
// return 'it-incubator.by';

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
    console.log('Попали', response.data);
  } else {
    // let message = response.data.messages.length > 0 ? response.data.message[0] : 'some error';
    let message = response.data.length > 0 ? response.data.message[0] : 'some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  // debugger;
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
};
export default authReducer;
