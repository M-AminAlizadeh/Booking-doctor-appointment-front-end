import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

function Layout({ component }) {
  return (
    <div className="d-flex w-100 justify-content-between">
      <Navbar className="border" />
      {component}
    </div>
  );
}

Layout.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Layout;
