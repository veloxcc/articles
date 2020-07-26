import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout pageTitle="Page not found">
    <h1>Page not found</h1>
    <p>Sorry, this page doesn't exist! Why not check out these <Link to="/">articles</Link>?</p>
  </Layout>
);

export default NotFoundPage;
