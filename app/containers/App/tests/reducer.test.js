import { assoc, flow } from 'lodash/fp';

import appReducer from '../reducer';
import { loadRepos, reposLoaded, repoLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentUser: false,
      userData: {
        repositories: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = flow(
        assoc('loading', true),
        assoc('error', false),
        assoc('userData.repositories', false)
      )(state)

    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = flow(
        assoc('userData.repositories', fixture),
        assoc('loading', false),
        assoc('currentUser', username)
      )(state)

    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = flow(
      assoc('error', fixture),
      assoc('loading', false)
    )(state)

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
