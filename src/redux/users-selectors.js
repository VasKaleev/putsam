import { createSelector } from 'reselect';

const getUsersState = (state) => state.usersPage;

export const getUsers = createSelector(
  [getUsersState],
  (usersPage) => usersPage?.users || [], // Добавлена защита
);

export const getPageSize = (state) => state.usersPage?.pageSize || 5;
export const getTotalUsersCount = (state) => state.usersPage?.totalUsersCount || 0;
export const getCurrentPage = (state) => state.usersPage?.currentPage || 1;
export const getisFetching = (state) => state.usersPage?.isFetching || false;
export const getFollowingInProgress = (state) => state.usersPage?.followingInProgress || [];
