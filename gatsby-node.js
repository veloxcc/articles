const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicArticle {
        nodes {
          uid
          id
        }
      }
    }
  `);

  pages.data.allPrismicArticle.nodes.forEach(node => {
    const { uid, id } = node;

    createPage({
      path: `/${uid}`,
      component: path.resolve(__dirname, 'src/templates/article.js'),
      context: {
        id,
      },
    });
  });
};
