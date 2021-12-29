const { concat } = require("lodash");
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
  else if (page.path.match(/pricing/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
  else if (page.path.match(/blogsingle/)) {
    page.context.layout = "header";
    createPage(page);
  }
  else if (page.path.match(/get-a-quote/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
  // else if (page.path.match(/calculator/)) {
  //   page.context.layout = "hideheaderfooter";
  //   createPage(page);
  // }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query {
    Blogs: allPrismicBlog(filter: {data: {category: {uid: {ne: null}}}}) {
      edges {
        node {
          id
          uid
          data {
            category {
              document {
                ... on PrismicBlogCategory {
                  id
                  data {
                    name {
                      text
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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
      ServicePages : allPrismicService(filter: {uid: {ne: "writer-services"}}) {
        edges {
          node {
            uid
            id
          }
        }
      }
      MainServicePage: allPrismicService(filter: {uid: {eq: "writer-services"}}) {
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
data.Blogs.edges.forEach(({ node }) => {     
  console.log('Blog Pages Name', node.data.category.document.data.name.text) 
  createPage({
    path: `/blog/${node.data.category.document.data.name.text.toLowerCase()}/${node.uid}/`,
    component: path.resolve("./src/templates/blog-template.js"),
    context: {
      layout: 'noheaderfooter',
      id:node.id
    },
  })
})
data.MainServicePage.edges.forEach(({ node }) => {     
  createPage({
    path: `writer-services/`,
    component: path.resolve("./src/templates/main-service-template.js"),
    context: {
      id:node.id
    },
  })
})
data.ServicePages.edges.forEach(({ node }) => {   
  if(node.uid==='saas-content-writerr')
  {
    createPage({
      path: `writer-services/saas-content-writer/`,
      component: path.resolve("./src/templates/service-template.js"),
      context: {
        id:node.id
      },
    })
  }  
  else
  {
    if(node.uid==='seo-content-writing'){
      createPage({
        path: `writer-services/${node.uid}/`,
        component: path.resolve("./src/templates/service-template.js"),
        context: {
          layout: 'noheaderfooter',
          id:node.id
        },
      })
    }
    else
    {
      createPage({
        path: `writer-services/${node.uid}/`,
        component: path.resolve("./src/templates/service-template.js"),
        context: {
          id:node.id
        },
      })
    }    
  }
})

data.CareerPages.edges.forEach(({ node }) => {      
  createPage({
    path: `${node.uid}/`,
    component: path.resolve("./src/templates/career-template.js"),
    context: {
      id:node.id
    },
  })
})

data.Pages.edges.forEach(({ node }) => {      
  createPage({
    path: `${node.uid}/`,
    component: path.resolve("./src/templates/page-template.js"),
    context: {
      id:node.id
    },
  })
})

data.Jobs.edges.forEach(({ node }) => {      
  createPage({
    path: `writing-jobs/${node.uid}/`,
    component: path.resolve("./src/templates/job-template.js"),
    context: {
      id:node.id
    },
  })
})


}
