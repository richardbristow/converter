import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  name, menuItems, value, handleChange,
}) => (
  <select name={name} value={value} onChange={handleChange}>
    {menuItems.map(({ mathName, displayName }) =>
      <option key={`${mathName}`} value={`${mathName}`}>{`${displayName}`}</option>)}
  </select>
);

export default Dropdown;
