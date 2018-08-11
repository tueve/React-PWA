/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { get } from 'lodash';

const selectHome = state => get(initialState, 'home' );

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => get(homeState, 'username'));

export { selectHome, makeSelectUsername };
