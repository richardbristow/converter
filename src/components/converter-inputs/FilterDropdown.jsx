import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../polyfills';
import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import FilterOptions from './FilterOptions';
import StyledConvertButton from '../shared/StyledConvertButton';

const StyledFilterDropdown = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 50px;
`;

const StyledArrowButton = StyledConvertButton.extend`
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
  border-radius: 0px 0px 0px 4px;
  min-width: 0;
`;

class FilterDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      dropdownOpen: false,
    };

    this.timeOutId = null;
    this.unitInput = React.createRef();
    this.updateFilter = this.updateFilter.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
    this.handleHeaderFocus = this.handleHeaderFocus.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.handleEscKey = this.handleEscKey.bind(this);
  }

  componentDidUpdate() {
    if (this.unitInput.current) {
      this.unitInput.current.focus();
    }
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        dropdownOpen: false,
      });
    });
  }

  handleDropdownClick(e) {
    e.preventDefault();
    const clicked = e.target.getAttribute('name');
    if (clicked === 'header') {
      this.setState({
        dropdownOpen: true,
      });
    } else {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
      }));
    }
  }

  handleDropdownItemClick(conversionType, e) {
    const { handleChange } = this.props;
    handleChange(conversionType, e);
    this.setState({
      dropdownOpen: false,
      filter: '',
    });
  }

  handleHeaderFocus() {
    this.setState({
      dropdownOpen: true,
    });
  }

  updateFilter({ target }) {
    const { value } = target;
    this.setState({
      filter: value,
    });
  }

  handleEscKey({ key }) {
    if (key === 'Escape') {
      this.setState({
        dropdownOpen: false,
      });
    }
  }

  render() {
    const {
      options, name, conversionType, dropdownValue,
    } = this.props;
    const { filter, dropdownOpen } = this.state;
    const arrowIcon = dropdownOpen === false ? <Icon size="0.9em" icon={icons.chevronDown} /> : <Icon size="0.9em" icon={icons.chevronUp} />;
    const { displayName } = options.find(option => option.mathName === dropdownValue && option);
    return (
      <StyledFilterDropdown onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        {dropdownOpen
          ? (
            <StyledFilterInput
              innerRef={this.unitInput}
              placeholder="Search units..."
              name="filter"
              type="text"
              value={filter}
              onKeyDown={this.handleEscKey}
              onChange={this.updateFilter}
            />
          ) : (
            <StyledConvertButton
              header
              name="header"
              tabIndex="0"
              onFocus={this.handleHeaderFocus}
              onClick={this.handleDropdownClick}
            >
              {displayName}
            </StyledConvertButton>
          )}
        <StyledArrowButton arrow dropdownOpen={dropdownOpen} tabIndex="-1" name="arrow" onClick={this.handleDropdownClick}>{arrowIcon}</StyledArrowButton>
        {dropdownOpen
          && (
          <FilterOptions
            currentDisplayName={displayName}
            options={options}
            name={name}
            conversionType={conversionType}
            filter={filter}
            handleDropdownItemClick={this.handleDropdownItemClick}
          />)}
      </StyledFilterDropdown>
    );
  }
}

FilterDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    mathName: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  conversionType: PropTypes.string.isRequired,
  dropdownValue: PropTypes.string.isRequired,
};

export default FilterDropdown;
