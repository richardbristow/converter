import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  name, options, value, handleChange, conversionType,
}) => (
  <select name={name} value={value} onChange={e => handleChange(conversionType, e)}>
    {options.map(({ mathName, displayName }) =>
      <option key={`${name}-${mathName}`} value={mathName}>{displayName}</option>)}
  </select>
);

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    mathName: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
};

export default Dropdown;
