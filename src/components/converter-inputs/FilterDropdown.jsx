import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { ChevronDown, ChevronUp } from '../../icons/InterfaceIcons';

import FilterOptions from './FilterOptions';
import StyledConvertButton from '../shared/StyledConvertButton';

const StyledFilterDropdown = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 50px;
  z-index: 1;
`;

const StyledArrowButton = styled(StyledConvertButton)`
  padding: 0px 15px;
  border-left: 0px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 0px 0px 4px 0px;
`;

const StyledFilterInput = styled.input`
  outline: none;
  text-align: left;
  padding-left: 15px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-radius: 0px 0px 0px 4px;
  min-width: 0;
`;

const FilterDropdown = ({
  handleChange,
  options,
  name,
  conversionType,
  dropdownValue,
  disableInputs,
}) => {
  const [filter, setFilter] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeOutId = useRef();
  const unitInput = useRef();

  useEffect(() => {
    if (unitInput.current) {
      unitInput.current.focus();
    }
  });

  const onFocusHandler = () => {
    clearTimeout(timeOutId.current);
  };

  const onBlurHandler = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    });
    timeOutId.current = id;
  };

  const handleDropdownClick = (event) => {
    event.preventDefault();
    const clicked = event.target.getAttribute('name');
    if (clicked === 'header') {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleDropdownItemClick = (type, event) => {
    handleChange(type, event);
    setDropdownOpen(false);
    setFilter('');
  };

  const { displayName, mathName } = options.find(
    (option) => option.mathName === dropdownValue && option
  );
  const isCurrency = conversionType === 'currency';
  return (
    <StyledFilterDropdown onBlur={onBlurHandler} onFocus={onFocusHandler}>
      {dropdownOpen ? (
        <StyledFilterInput
          ref={unitInput}
          placeholder="Search units..."
          name="filter"
          type="text"
          value={filter}
          onKeyDown={({ key }) => {
            if (key === 'Escape') {
              setDropdownOpen(false);
            }
          }}
          onChange={({ target }) => {
            const { value } = target;
            setFilter(value);
          }}
        />
      ) : (
        <StyledConvertButton
          header
          name="header"
          tabIndex="0"
          onFocus={() => setDropdownOpen(true)}
          onClick={handleDropdownClick}
          disabled={disableInputs}
        >
          {isCurrency ? `${displayName} (${mathName})` : displayName}
        </StyledConvertButton>
      )}
      <StyledArrowButton
        arrow
        dropdownOpen={dropdownOpen}
        tabIndex="-1"
        name="arrow"
        onClick={handleDropdownClick}
        disabled={disableInputs}
      >
        {dropdownOpen === false ? <ChevronDown /> : <ChevronUp />}
      </StyledArrowButton>
      {dropdownOpen && (
        <FilterOptions
          currentDisplayName={displayName}
          options={options}
          name={name}
          conversionType={conversionType}
          filter={filter}
          handleDropdownItemClick={handleDropdownItemClick}
        />
      )}
    </StyledFilterDropdown>
  );
};

FilterDropdown.defaultProps = {
  disableInputs: false,
};

FilterDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      mathName: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
  dropdownValue: PropTypes.string.isRequired,
  disableInputs: PropTypes.bool,
};

export default FilterDropdown;
