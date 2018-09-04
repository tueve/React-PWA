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

import { LOAD_ERROR, LOAD_FEED, LOAD_SUCCESS } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  feedData: [],
};

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FEED:
      return flow(assoc('loading', true))(state);
    case LOAD_SUCCESS:
      return flow(
        assoc('feedData', action.data),
        assoc('loading', false),
      )(state);
    case LOAD_ERROR:
      return flow(
        assoc('error', action.error),
        assoc('loading', false),
      )(state);
    default:
      return state;
  }
}

export default feedReducer;
