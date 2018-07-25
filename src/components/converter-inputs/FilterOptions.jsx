import React from 'react';

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
    <div>
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
    </div>
  );
};

export default FilterOptions;
