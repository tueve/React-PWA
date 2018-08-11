/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { assoc } from 'lodash/fp';

import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return assoc('user', action.name.replace(/@/gi, ''))(state);
    default:
      return state;
  }
}

export default homeReducer;
