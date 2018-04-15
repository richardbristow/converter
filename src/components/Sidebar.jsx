import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ items }) => (
  <div>
    {Object.keys(items).map((type) => {
      const { displayName, mathName } = items[type];
      return <li key={mathName}>{displayName}</li>;
    })}
  </div>
);

Sidebar.propTypes = {
  items: PropTypes.shape({
    length: PropTypes.shape({
      displayName: PropTypes.string,
      mathName: PropTypes.string,
    }),
  }, {
    surfaceArea: PropTypes.shape({
      displayName: PropTypes.string,
      mathName: PropTypes.string,
    }),
  }).isRequired,
};

export default Sidebar;
