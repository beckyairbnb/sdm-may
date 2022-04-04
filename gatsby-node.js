const { concat } = require("lodash");
const path = require("path")
const _ = require(`lodash`);
const { paginate } = require(`gatsby-awesome-pagination`);

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
    Blogs: allPrismicBlog {
      edges {
        node {
          id
          uid
          data {
            category {
              document {
                ... on PrismicBlogCategory {
                  id
                  uid
                  data {
                    name {
                      text
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
const DEFAULT_BLOG_BASE_PATH = '/blog';
const DEFAULT_BLOG_POSTS_PER_PAGE = 60;

const basePath = DEFAULT_BLOG_BASE_PATH;
const blogs = data.Blogs.edges;

const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE; 

blogs.forEach(({ node }) => {     
  createPage({
    path: `/blog/${node.data.category.document.uid}/${node.uid}/`,
    component: path.resolve("./src/templates/blog-template.js"),
    context: {
      layout: 'noheaderfooter',
      uid:node.uid
    },
  })
})

let categories = [];

_.each(blogs, (blog) => {
  
  if (_.get(blog, 'node.data.category.document.uid')) {
    categories = categories.concat(blog.node.data.category);
  }
});

categories = _.uniqWith(categories, _.isEqual);

categories.forEach((cat) => {
  
  const blogsWithCat = blogs.filter(
    (blog) =>
      blog.node.data.category && blog.node.data.category.document.uid === cat.document.uid
  );
  const categoryPath = `${basePath}/${cat.document.uid}`;

  paginate({
    createPage,
    items: blogsWithCat,
    itemsPerPage: postsPerPage,
    pathPrefix: categoryPath,
    component: path.resolve( './src/templates/CategoryTemplate.js'),
    context: {
      uid: cat.document.uid,
      basePath,
      paginationPath: categoryPath,
      categories,
    },
  });
});


paginate({
  createPage,
  items: blogs,
  itemsPerPage: postsPerPage,
  itemsPerFirstPage: postsPerPage + 2,
  pathPrefix: basePath,
  component: path.resolve( './src/templates/BlogListTemplate.js'),
  context: {
    basePath,
    paginationPath: basePath,
    categories
  },
});



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
