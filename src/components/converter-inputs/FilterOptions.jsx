import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledConvertButton from '../shared/StyledConvertButton';

const StyledFilterOptions = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
  max-height: 300px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 10px;
`;

const StyledFilterError = StyledConvertButton.extend`
  cursor: not-allowed;
`;

const focusNextOption = (name, value, nextOption, refs) => {
  if (refs[nextOption]) {
    refs[nextOption].current.focus();
  }
};

const onArrowKeyDown = (options, refs, e) => {
  const { key, target } = e;
  const { name, value } = target;
  const optionsMathNames = options.map(option => option.mathName);
  if (key === 'ArrowDown') {
    e.preventDefault();
    const nextOption = optionsMathNames.indexOf(value) + 1;
    focusNextOption(name, value, nextOption, refs);
  } else if (key === 'ArrowUp') {
    e.preventDefault();
    const nextOption = optionsMathNames.indexOf(value) - 1;
    focusNextOption(name, value, nextOption, refs);
  }
};

const handleMouseOver = (options, refs, { target }) => {
  const { value } = target;
  const optionsMathNames = options.map(option => option.mathName);
  const current = optionsMathNames.indexOf(value);
  refs[current].current.focus();
};

const FilterOptions = ({
  options, name, conversionType, filter, handleDropdownItemClick, currentDisplayName,
}) => {
  const filteredOptions = options.filter(option => (
    option.displayName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));
  const dropdownOptionRefs = filteredOptions.map(() => React.createRef());
  return (
    <StyledFilterOptions>
      {filteredOptions.length > 0 ? (filteredOptions.map(({ mathName, displayName }, index) => (
        <StyledConvertButton
          name={`${name}Unit`}
          tabIndex={index === 0 ? '0' : '-1'}
          key={`${name}-${mathName}`}
          value={mathName}
          onClick={e => handleDropdownItemClick(conversionType, e)}
          onKeyDown={e => onArrowKeyDown(filteredOptions, dropdownOptionRefs, e)}
          innerRef={dropdownOptionRefs[index]}
          selected={currentDisplayName === displayName}
          onMouseEnter={e => handleMouseOver(filteredOptions, dropdownOptionRefs, e)}
        >
          {displayName}
        </StyledConvertButton>))) : <StyledFilterError disabled tabIndex="-1">No units found.</StyledFilterError>}
    </StyledFilterOptions>
  );
};

FilterOptions.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    mathName: PropTypes.string.isRequired,
  })).isRequired,
  conversionType: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handleDropdownItemClick: PropTypes.func.isRequired,
  currentDisplayName: PropTypes.string.isRequired,
};

export default FilterOptions;
