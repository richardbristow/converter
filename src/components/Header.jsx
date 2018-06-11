import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/help">Help</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Header;
