import axios from 'axios';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../constants/usersConstants';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

export const fetchUsers = (amount) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data.slice(0, amount);
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};
