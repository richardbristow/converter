import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, value, handleChange, conversionType,
}) =>
  <input name={name} value={value} type="text" onChange={e => handleChange(conversionType, e)} />;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
};

export default Input;
