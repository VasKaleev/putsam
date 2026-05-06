import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { posts: state.profilePage.posts, newPostText: state.profilePage.newPostText };
};
const mapDispdtchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispdtchToProps)(MyPosts);
export default MyPostsContainer;
