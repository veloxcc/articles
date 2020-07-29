import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'milligram';
import './layout.css';

const Layout = ({ children, pageTitle }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,500,300italic,700,700italic"
      />
      <title>{pageTitle} / VELO X</title>
    </Helmet>
    <div className="container">
      <header>
        <div className="row">
          <div className="column">
            <a href="/">velox.cc</a> / articles
          </div>
        </div>
      </header>
      <div className="row">
        <div className="column">
          <main>{children}</main>
        </div>
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
