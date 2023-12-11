import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const Layout = function ({ component }) {
  return (
    <div className="d-flex">
      <Navbar />
      {component}
    </div>
  );
};

Layout.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Layout;
