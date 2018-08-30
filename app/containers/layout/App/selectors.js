/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { get } from 'lodash'

const selectGlobal = state => get(state, 'global');

const selectRoute = state => get(state, 'route');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => get(globalState, 'currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => get(globalState, 'loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => get(globalState, 'error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    get(globalState, ['userData', 'repositories']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => get(routeState,'location').toJS());

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
