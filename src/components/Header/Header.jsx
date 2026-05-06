import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/1c/ed/85/1ced853531e3dbf0c8d906f2c8e021c0.jpg"
        alt="Logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
