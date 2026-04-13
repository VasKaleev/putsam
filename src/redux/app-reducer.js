// import { initialize, stopSubmit } from 'redux-form';
// import { authAPI } from '../api/api';
import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
// const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
        // isAuth: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
export const initializeApp = () => (dispatch) => {
  // Создаем массив промисов
  const promises = [
    dispatch(getAuthUserData()),
    // другие асинхронные операции...
  ];

  // Ждем выполнения всех промисов
  return Promise.all(promises).then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;
