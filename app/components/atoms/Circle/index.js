import React from 'react';
import PropTypes from 'prop-types';
import CirclePrimitive from './style'

const Circle = props => <CirclePrimitive {...props} />;

Circle.propTypes = {
  delay: PropTypes.number,
  rotate: PropTypes.number,
};

export default Circle;
