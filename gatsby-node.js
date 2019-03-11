const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/news${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
    const result = await graphql(`
      {
        posts: allFile(filter: {relativePath: {glob: "*.mdx"}}, sort: {fields: relativePath, order: DESC}) {
          edges {
            node {
              childMdx {
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `).then(res => res.data )

    // console.log(result)

    result.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.childMdx.fields.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: node.childMdx.fields.slug,
          id: node.id
        },
      })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}