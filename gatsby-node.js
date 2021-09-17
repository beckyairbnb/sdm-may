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
      Jobs :  allPrismicWritingjobs {
        edges {
          node {
            uid
            id
          }
        }
      }
      Pages : allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
      ServicePages : allPrismicService {
        edges {
          node {
            uid
            id
          }
        }
      }
      CareerPages : allPrismicCareer {
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

data.CareerPages.edges.forEach(({ node }) => {      
  createPage({
    path: node.uid,
    component: path.resolve("./src/templates/career-template.js"),
    context: {
      id:node.id
    },
  })
})

data.Pages.edges.forEach(({ node }) => {      
  createPage({
    path: node.uid,
    component: path.resolve("./src/templates/page-template.js"),
    context: {
      id:node.id
    },
  })
})

data.Jobs.edges.forEach(({ node }) => {      
  createPage({
    path: node.uid,
    component: path.resolve("./src/templates/job-template.js"),
    context: {
      id:node.id
    },
  })
})


}
