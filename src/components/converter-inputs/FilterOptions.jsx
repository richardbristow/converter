import React from 'react';

const FilterOptions = ({
  options, name, conversionType, filter, handleDropdownItemClick,
}) => {
  const filteredOptions = options.filter(option => (
    option.displayName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));
  return (
    <div>
      {filteredOptions.length > 0 ? (filteredOptions.map(({ mathName, displayName }, index) => (
        <button
          name={`${name}Unit`}
          tabIndex={index === 0 ? '0' : '-1'}
          key={`${name}-${mathName}`}
          value={mathName}
          onClick={e => handleDropdownItemClick(conversionType, e)}
        >
          {displayName}
        </button>))) : <p>No units found.</p>}
    </div>
  );
};

export default FilterOptions;
