/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectFeed = state => get(state, 'feed');

const makeSelectFeedData = () =>
  createSelector(selectFeed, feedState => get(feedState, 'feedData'));

const makeSelectLoading = () =>
  createSelector(selectFeed, feedState => get(feedState, 'loading'));

const makeSelectError = () =>
  createSelector(selectFeed, feedState => get(feedState, 'error'));

export { selectFeed, makeSelectFeedData, makeSelectLoading, makeSelectError };
