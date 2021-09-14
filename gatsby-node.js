const path = require("path")
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
 if (page.path.match(/sign|reset/)) {
    page.context.layout = "mini";
    createPage(page);
  } else if (page.path.match(/coming/)) {
    page.context.layout = "coming";
    createPage(page);
  }
  else if (page.path.match(/test/)) {
    page.context.layout = "test";
    createPage(page);
  }
  
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query {
      ServicePages : allPrismicService {
        edges {
          node {
            uid
            id
          }
        }
      }
  }
`)

data.ServicePages.edges.forEach(({ node }) => {      
  createPage({
    path: node.uid,
    component: path.resolve("./src/templates/service-template.js"),
    context: {
      id:node.id,
      'layout':'blog'
    },
  })
})


}
