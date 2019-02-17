import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => (
  <Fragment>
    Uh-oh! No page exists why dont you go back&nbsp;
    <Link to="/length">home</Link>
    .
  </Fragment>
);

export default NoRoute;
