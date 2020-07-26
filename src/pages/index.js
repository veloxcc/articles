import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data }) => (
  <Layout pageTitle="Articles">
    <h1>Articles</h1>
    {data.allPrismicArticle.nodes.length === 0 && (
      <p>There are no articles published, please check later.</p>
    )}

    {data.allPrismicArticle.nodes.map(({ id, uid, data }) => (
      <div key={id}>
        <Link to={`/articles/${uid}`}>
          <h3>{data.title.text}</h3>
        </Link>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allPrismicArticle {
      nodes {
        uid
        id
        data {
          title {
            text
          }
        }
      }
    }
  }
`;
