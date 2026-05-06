// import React from 'react';
import styles from './Paginator.module.css';

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  // Ограничим количество отображаемых страниц для удобства
  for (let i = 1; i <= Math.min(pagesCount, 10); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p} // Добавлен key для избежания warning
            className={props.currentPage === p && styles.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p);
            }}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
