import React from 'react';

const FilterOptions = ({
  options, name, conversionType, filter, handleDropdownItemClick,
}) => {
  const filteredOptions = options.filter(option => (
    option.displayName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));
  return (
    <div>
      {filteredOptions.length > 0 ? (filteredOptions.map(({ mathName, displayName }) => (
        <button
          name={`${name}Unit`}
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
