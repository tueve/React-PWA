import { flow, get } from 'lodash/fp';

import {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentUser', () => {
  const currentUserSelector = makeSelectCurrentUser();
  it('should select the current user', () => {
    const username = 'mxstbr';
    const mockedState = {
      global: {
        currentUser: username,
      },
    };
    expect(currentUserSelector(mockedState)).toEqual(username);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectRepos', () => {
  const reposSelector = makeSelectRepos();
  it('should select the repos', () => {
    const repositories = [];
    const mockedState = {
      global: {
        userData: {
          repositories,
        },
      },
    };
    expect(reposSelector(mockedState)).toEqual(repositories);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const route = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      route,
    };
    expect(locationStateSelector(mockedState)).toEqual(
      get('location')(route),
    );
  });
});
