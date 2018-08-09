import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d={icon} />
  </svg>
);

Icon.defaultProps = {
  size: '18',
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon;
