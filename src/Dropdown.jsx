import React from 'react';

const Dropdown = ({ conversionTypes, value, handleChange }) => (
  <select value={value} onChange={handleChange}>
    {conversionTypes.map(type =>
      <option key={`${type}`} value={`${type}`}>{`${type}`}</option>) }
  </select>
);

export default Dropdown;
