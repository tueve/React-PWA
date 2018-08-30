/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { assoc, flow } from 'lodash/fp';

import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return flow(
        assoc('loading', true),
        assoc('error', false),
        assoc('userData.repositories', false)
      )(state)
    case LOAD_REPOS_SUCCESS:
      return flow(
          assoc('userData.repositories', action.repos),
          assoc('loading', false),
          assoc('currentUser', action.username)
        )(state)
    case LOAD_REPOS_ERROR:
      return flow(
        assoc('error',action.error),
        assoc('loading', false)
      )(state)
    default:
      return state;
  }
}

export default appReducer;
