const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
        allContentfulCar {
        edges {
            node {
            slug
            }
        }
        }
    }
  `)

  const templatePath = path.resolve("./src/templates/car_template.js")
  
  result.data.allContentfulCar.edges.forEach(edge => {
    createPage({
      path: `/cars/${edge.node.slug}/`,
      component: templatePath,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
