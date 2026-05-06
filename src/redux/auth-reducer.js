import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

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
  try {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  } catch (error) {
    console.log('Error in getAuthUserData:', error);
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
      console.log('Login successful', response.data);
    } else {
      // Исправлено: правильный доступ к messages
      let message =
        response.data.messages && response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error occurred';
      dispatch(stopSubmit('login', { _error: message }));
    }
  } catch (error) {
    console.log('Login error:', error);
    dispatch(stopSubmit('login', { _error: 'Network error. Please try again.' }));
  }
};

export const logout = () => async (dispatch) => {
  try {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      // Исправлено: устанавливаем isAuth в false, а не вызываем getAuthUserData()
      dispatch(setAuthUserData(null, null, null, false));
      console.log('Logout successful');
    }
  } catch (error) {
    console.log('Logout error:', error);
  }
};

export default authReducer;
