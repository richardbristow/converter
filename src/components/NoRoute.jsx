import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => (
  <>
    Uh-oh! No page exists why dont you go back&nbsp;
    <Link to="/length">home</Link>.
  </>
);

export default NoRoute;
