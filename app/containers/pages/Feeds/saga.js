/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_FEED } from './constants';
import { loadFeedSuccess } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getFeed() {
  const requestURL = `/api/feed`;

  try {
    // Call our request helper (see 'utils/request')
    console.log(requestURL, 'url');
    const repos = yield call(request, requestURL);
    console.log(repos, 'repos');
    yield put(loadFeedSuccess(repos.Feeds));
  } catch (err) {
    // yield put(repoLoadingError(err));
    console.log(error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getNewsFeed() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_FEED, getFeed);
}
