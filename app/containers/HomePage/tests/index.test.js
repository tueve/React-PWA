/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomePage />,
    );
    expect(
      renderedComponent.contains(
        <HomePage/>,
      ),
    ).toEqual(true);
  });

});
