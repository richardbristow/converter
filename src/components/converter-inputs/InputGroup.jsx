import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';

const StyledInputGroup = styled.div`
  grid-area: ${props => props.name};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto;
`;

const InputGroup = ({
  name, textValue, dropdownValue, options, handleChange, conversionType,
}) => (
  <StyledInputGroup name={name}>
    <input name={`${name}Input`} value={textValue} type="text" onChange={e => handleChange(conversionType, e)} />
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
