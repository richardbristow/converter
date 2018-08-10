import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';

const StyledInputGroup = styled.div`
  grid-area: ${props => props.name};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px auto;
`;

const StyledNumberInput = styled.input`
  padding: 0px 15px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 0px;
  border-radius: 4px 4px 0px 0px;
  font-size: 2em;
  min-width: 0;
`;

const InputGroup = ({
  name, textValue, dropdownValue, options, handleChange, conversionType,
}) => (
  <StyledInputGroup name={name}>
    <StyledNumberInput name={`${name}Input`} value={textValue} type="text" onChange={e => handleChange(conversionType, e)} />
    <FilterDropdown
      options={options}
      name={name}
      handleChange={handleChange}
      conversionType={conversionType}
      dropdownValue={dropdownValue}
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
