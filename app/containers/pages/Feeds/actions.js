/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_FEED, LOAD_ERROR, LOAD_SUCCESS } from './constants';

/**
 * Load feed from api
 *
 * @return {object} retun an action object type LOAD_FEED
 */
export function loadFeed() {
  return {
    type: LOAD_FEED,
  };
}

/**
 * get data success from api
 *
 * @param {data} data get from api
 */
export function loadFeedSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data,
  };
}
