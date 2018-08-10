import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, size }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: 'currentcolor',
    },
  };
  return (
    <svg style={styles.svg} width={size} height={size} viewBox="0 0 24 24">
      <path style={styles.path} d={icon} />
    </svg>
  );
};

Icon.defaultProps = {
  size: '22',
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon;
