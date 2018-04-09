import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, handleChange }) =>
  <input name={name} value={value} type="text" onChange={handleChange} />;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
