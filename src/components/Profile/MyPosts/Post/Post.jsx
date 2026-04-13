import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  // console.log(props.message);
  // debugger;
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/736x/03/a8/96/03a8962f22069569184b1fa2d471687e.jpg" alt="" />
      {props.message}
      <div>
        <span>Лайки: {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
