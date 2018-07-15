import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({
  name, textValue, dropdownValue, options, handleChange, conversionType,
}) => (
  <div>
    <input name={`${name}Input`} value={textValue} type="text" onChange={e => handleChange(conversionType, e)} />
    <select name={`${name}Unit`} value={dropdownValue} onChange={e => handleChange(conversionType, e)}>
      {options.map(({ mathName, displayName }) =>
        <option key={`${name}-${mathName}`} value={mathName}>{displayName}</option>)}
    </select>
  </div>
);

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  dropdownValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    mathName: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
};

export default InputGroup;
