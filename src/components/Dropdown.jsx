import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  name, menuItems, value, handleChange,
}) => (
  <select name={name} value={value} onChange={handleChange}>
    {menuItems.map(({ mathName, displayName }) =>
      <option key={`${name}-${mathName}`} value={`${mathName}`}>{`${displayName}`}</option>)}
  </select>
);

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Dropdown;
