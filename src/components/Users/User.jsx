import React from 'react';
import styles from './users.module.css';
import usersPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
  let u = user;
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${u.id}`}>
            <img
              src={u.photos.small != null ? u.photos.small : usersPhoto}
              className={styles.usersPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                unfollow(u.id);
              }}>
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                follow(u.id);
              }}>
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>ID: {u.id}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
