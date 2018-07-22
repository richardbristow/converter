import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      open: false,
    };

    this.handleOpenDropdownClick = this.handleOpenDropdownClick.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  handleOpenDropdownClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  updateFilter({ target }) {
    const { value } = target;
    this.setState({
      filter: value,
    });
  }

  render() {
    const {
      options, name, handleChange, conversionType,
    } = this.props;
    const filteredOptions = options.filter(option => (
      option.displayName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
    ));
    const arrowIcon = this.state.open === false ? 'ˇ' : 'ˆ';
    return (
      <div>
        <input name="filter" type="text" value={this.state.filter} onChange={this.updateFilter} />
        <button name="arrow" onClick={this.handleOpenDropdownClick}>{arrowIcon}</button>
        {this.state.open && (
          <ul>
            {filteredOptions.map(({ mathName, displayName }) =>
              <button name={`${name}Unit`} key={`${name}-${mathName}`} value={mathName} onClick={e => handleChange(conversionType, e)}>{displayName}</button>)}
          </ul>)}
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

