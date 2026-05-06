import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUsersCount} // используем реальное количество
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <div>
        {props.users &&
          props.users.map((u) => (
            <User
              user={u}
              key={u.id}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          ))}
        <div />
      </div>
    </div>
  );
};

export default Users;
