import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';

const StyledInputGroup = styled.div`
  grid-area: ${props => props.name};
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
`;

const InputGroup = ({
  name, textValue, dropdownValue, options, handleChange, conversionType,
}) => (
  <StyledInputGroup name={name}>
    <input name={`${name}Input`} value={textValue} type="text" onChange={e => handleChange(conversionType, e)} />
    <select name={`${name}Unit`} value={dropdownValue} onChange={e => handleChange(conversionType, e)}>
      {options.map(({ mathName, displayName }) =>
        <option key={`${name}-${mathName}`} value={mathName}>{displayName}</option>)}
    </select>
    <FilterDropdown
      options={options}
      name={name}
      handleChange={handleChange}
      conversionType={conversionType}
      dropdownValue={textValue}
    />
  </StyledInputGroup>
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
