import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => (
  <div>
    Uh-oh! No page exists why dont you go back <Link to="/length">home</Link>.
  </div>
);

export default NoRoute;
