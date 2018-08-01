import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFilterOptions = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 25px;
  max-height: 300px;
  overflow: auto;
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
    const nextOption = optionsMathNames.indexOf(value) + 1;
    focusNextOption(name, value, nextOption, refs);
  } else if (key === 'ArrowUp') {
    const nextOption = optionsMathNames.indexOf(value) - 1;
    focusNextOption(name, value, nextOption, refs);
  }
};

const FilterOptions = ({
  options, name, conversionType, filter, handleDropdownItemClick,
}) => {
  const filteredOptions = options.filter(option => (
    option.displayName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));
  const dropdownOptionRefs = filteredOptions.map(() => React.createRef());
  return (
    <StyledFilterOptions>
      {filteredOptions.length > 0 ? (filteredOptions.map(({ mathName, displayName }, index) => (
        <button
          name={`${name}Unit`}
          tabIndex={index === 0 ? '0' : '-1'}
          key={`${name}-${mathName}`}
          value={mathName}
          onClick={e => handleDropdownItemClick(conversionType, e)}
          onKeyDown={e => onArrowKeyDown(filteredOptions, dropdownOptionRefs, e)}
          ref={dropdownOptionRefs[index]}
        >
          {displayName}
        </button>))) : <p>No units found.</p>}
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
};

export default FilterOptions;
