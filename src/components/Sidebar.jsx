import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// TODO: add  tests for the Sidebar

const Sidebar = ({ items }) => (
  <div>
    {Object.keys(items).map((type) => {
      const { displayName, mathName } = items[type];
      return <li key={mathName}><Link to={mathName} >{displayName}</Link></li>;
    })}
  </div>
);

const typeProps = {
  displayName: PropTypes.string,
  mathName: PropTypes.string,
};

Sidebar.propTypes = {
  items: PropTypes.shape({
    length: PropTypes.shape({ ...typeProps }),
  }, {
    surfaceArea: PropTypes.shape({ ...typeProps }),
  }).isRequired,
};

export default Sidebar;
