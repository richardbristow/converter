import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterOptions from './FilterOptions';

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
    this.props.handleChange(conversionType, e);
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

  render() {
    const {
      options, name, conversionType, dropdownValue,
    } = this.props;
    const { filter, dropdownOpen } = this.state;
    const arrowIcon = dropdownOpen === false ? 'ˇ' : 'ˆ';
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        {dropdownOpen ?
          <input ref={this.unitInput} placeholder="Search units..." name="filter" type="text" value={filter} onChange={this.updateFilter} /> :
          <div name="header" tabIndex="0" onFocus={this.handleHeaderFocus} onClick={this.handleDropdownClick}>{dropdownValue}</div>}
        <button tabIndex="-1" name="arrow" onClick={this.handleDropdownClick}>{arrowIcon}</button>
        {dropdownOpen &&
          <FilterOptions
            options={options}
            name={name}
            conversionType={conversionType}
            filter={filter}
            handleDropdownItemClick={this.handleDropdownItemClick}
          />}
      </div>
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
};

export default FilterDropdown;

