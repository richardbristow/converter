import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      open: false,
    };

    this.updateFilter = this.updateFilter.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(e) {
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
    const { options, name } = this.props;
    const filteredOptions = options.filter(option => (
      option.displayName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
    ));
    const arrowIcon = this.state.open === false ? 'Closed' : 'Open';
    return (
      <div>
        <input type="text" value={this.state.filter} onChange={this.updateFilter} />
        <button onClick={this.handleArrowClick}>{arrowIcon}</button>
        <ul>
          {filteredOptions.map(({ mathName, displayName }) =>
            <li key={`${name}-${mathName}`} value={mathName}>{displayName}</li>)}
        </ul>
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
};

export default FilterDropdown;

