const { concat } = require("lodash");
const path = require("path")
const _ = require(`lodash`);
const { paginate } = require(`gatsby-awesome-pagination`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, createRedirect } = actions;

  const  rurls = [
    {oldurl:'/content-writing-agency/',newurl: '/'},
    {oldurl:'/blog/grammar/',newurl: '/blog/grammar-tips/'},
    {oldurl:'/blog/grammar/lo-and-behold-or-low-and-behold/',newurl: '/blog/grammar-tips/lo-and-behold-or-low-and-behold/'},
    {oldurl:'/blog/grammar/3',newurl: '/blog/grammar-tips/3'},
    {oldurl:'/blog/grammar/unravelling-the-differences-between-wander-vs.-wonder',newurl: '/blog/grammar-tips/unravelling-the-differences-between-wander-vs.-wonder'},
    {oldurl:'/blog/grammar/ok-vs-okay.-what-they-mean-and-when-to-use-them',newurl: '/blog/grammar-tips/ok-vs-okay.-what-they-mean-and-when-to-use-them'},
    {oldurl:'/blog/grammar/content-vs.-contents',newurl: '/blog/grammar-tips/content-vs.-contents'},
    {oldurl:'/blog/grammar/how-to-argue-in-an-essay/',newurl: '/blog/grammar-tips/how-to-argue-in-an-essay/'},
    {oldurl:'/blog/grammar/began-vs-begun-the-correct-uses-and-clearing-confusions/',newurl: '/blog/grammar-tips/began-vs-begun-the-correct-uses-and-clearing-confusions/'},
    {oldurl:'/blog/grammar/receive-or-recieve/',newurl: '/blog/grammar-tips/receive-or-recieve/'},
    {oldurl:'/blog/grammar/bury-the-lede-or-bury-the-lead/',newurl: '/blog/grammar-tips/bury-the-lede-or-bury-the-lead/'},
    {oldurl:'/blog/grammar/weird-or-wierd/',newurl: '/blog/grammar-tips/weird-or-wierd/'},
    {oldurl:'/blog/grammar/half-vs-halve/',newurl: '/blog/grammar-tips/half-vs-halve/'},
    {oldurl:'/blog/grammar/strategically--all-intents-and-purposes-or-all-intensive/',newurl: '/blog/grammar-tips/strategically--all-intents-and-purposes-or-all-intensive/'},
    {oldurl:'/blog/grammar/tow-the-line-or-toe-the-line/',newurl: '/blog/grammar-tips/tow-the-line-or-toe-the-line/'},
    {oldurl:'/blog/grammar/friend-or-freind/',newurl: '/blog/grammar-tips/friend-or-freind/'},
    {oldurl:'/blog/grammar/focused-or-focussed/',newurl: '/blog/grammar-tips/focused-or-focussed/'},
    {oldurl:'/blog/grammar/lo-and-behold/',newurl: '/blog/grammar-tips/lo-and-behold/'},
    {oldurl:'/blog/grammar/choose-or-chose/',newurl: '/blog/grammar-tips/choose-or-chose/'},
    {oldurl:'/blog/grammar/2/',newurl: '/blog/grammar-tips/2/'},
    {oldurl:'/blog/grammar/label-or-lable/',newurl: '/blog/grammar-tips/label-or-lable/'},
    {oldurl:'/blog/grammar/which-one-is-the-correct-word-choice/',newurl: '/blog/grammar-tips/which-one-is-the-correct-word-choice/'},
    {oldurl:'/blog/grammar/neighbor-or-neighbour/',newurl: '/blog/grammar-tips/neighbor-or-neighbour/'},
    {oldurl:'/blog/grammar/word-choice-media-vs.-mediums',newurl: '/blog/grammar-tips/word-choice-media-vs.-mediums'},
    {oldurl:'/blog/grammar/what-and-which-are-common-interrogative-words.-they/',newurl: '/blog/grammar-tips/what-and-which-are-common-interrogative-words.-they/'},
    {oldurl:'/blog/grammar/how-to-write-a-letter-of-introduction/',newurl: '/blog/grammar-tips/how-to-write-a-letter-of-introduction/'},
    {oldurl:'/blog/grammar/4',newurl: '/blog/grammar-tips/4'},
    {oldurl:'/blog/grammar/are-vs-our-a-grammatical-dissection-of-meanings/',newurl: '/blog/grammar-tips/are-vs-our-a-grammatical-dissection-of-meanings/'},
    {oldurl:'/writer-services/b2b-content-marketing-agency/',newurl: '/writer-services/b2b-content-writing-services/'},
    {oldurl:'/writer-services/writer-services/',newurl: '/writer-services/'},
    {oldurl:'/writer-services/seo-content-writing/images/mob-banner.jpg',newurl: '/writer-services/seo-content-writing/'},
    {oldurl:'/writer-services/b2b-content-writing-services/images/mob-banner.jpg',newurl: '/writer-services/b2b-content-writing-services/'},
    {oldurl:'/writer-services/fintech-content-writer/images/mob-banner.jpg',newurl: '/writer-services/fintech-content-writer/'},
    {oldurl:'/writer-services/blog-article-writing/images/mob-banner.jpg',newurl: '/writer-services/blog-article-writing/'},
    {oldurl:'/writer-services/images/mob-banner.jpg',newurl: '/writer-services/'},
    {oldurl:'/writer-services/saas-content-writer/images/mob-banner.jpg',newurl: '/writer-services/saas-content-writer/'},
    {oldurl:'/writer-services/marketing-content-writer/images/mob-banner.jpg',newurl: '/writer-services/marketing-content-writer/'},
    {oldurl:'/writer-services/white-paper-writing/images/mob-banner.jpg',newurl: '/writer-services/white-paper-writing/'},
    {oldurl:'/writer-services/b2b-content-marketing-agency/images/mob-banner.jpg',newurl: '/writer-services/b2b-content-marketing-agency/'},
    {oldurl:'/writer-services/product-review-writing/images/mob-banner.jpg',newurl: '/writer-services/product-review-writing/'},
    {oldurl:'/writer-services/food-writer/images/mob-banner.jpg',newurl: '/writer-services/food-writer/'},
    {oldurl:'/writer-services/automotive-content-marketing-writer/images/mob-banner.jpg',newurl: '/writer-services/automotive-content-marketing-writer/'},
    {oldurl:'/writer-services/beauty-writer/images/mob-banner.jpg',newurl: '/writer-services/beauty-writer/images/mob-banner.jpg'},
    {oldurl:'/writer-services/insurance-writer/images/mob-banner.jpg',newurl: '/writer-services/insurance-writer/'},
    {oldurl:'/writer-services/health-writer/images/mob-banner.jpg',newurl: '/writer-services/health-writer/'},
    {oldurl:'/writer-services/nutrition-writer/images/mob-banner.jpg',newurl: '/writer-services/nutrition-writer/'},
    {oldurl:'/writer-services/product-description-writing/images/mob-banner.jpg',newurl: '/writer-services/product-description-writing/'},
    {oldurl:'/writer-services/fitness-writer/images/mob-banner.jpg',newurl: '/writer-services/fitness-writer/'},
    {oldurl:'/writer-services/human-resources-writer/images/mob-banner.jpg',newurl: '/writer-services/human-resources-writer/'},
    {oldurl:'/writer-services/cyber-security-writer/images/mob-banner.jpg',newurl: '/writer-services/cyber-security-writer/'},
    {oldurl:'/writer-services/cannabis-seo-content-writer/images/mob-banner.jpg',newurl: '/writer-services/cannabis-seo-content-writer/'},
    {oldurl:'/writer-services/financial-writing/images/mob-banner.jpg',newurl: '/writer-services/financial-writing/'},
    {oldurl:'/writer-services/fashion-writer/images/mob-banner.jpg',newurl: '/writer-services/fashion-writer/'},
    {oldurl:'/writer-services/medical-healthcare-writing/images/mob-banner.jpg',newurl: '/writer-services/medical-healthcare-writing/'},
    {oldurl:'/writer-services/construction-content-marketing-writer/images/mob-banner.jpg',newurl: '/writer-services/construction-content-marketing-writer/'},
    {oldurl:'/writer-services/dental-content-writing/images/mob-banner.jpg',newurl: '/writer-services/dental-content-writing/'},
    {oldurl:'/writer-services/ecommerce-content-marketing-writer/images/mob-banner.jpg',newurl: '/writer-services/ecommerce-content-marketing-writer/'},
    {oldurl:'/writer-services/travel-writing/images/mob-banner.jpg',newurl: '/writer-services/travel-writing/'},
    {oldurl:'/writer-services/garden-floral-writer/images/mob-banner.jpg',newurl: '/writer-services/garden-floral-writer/'},
    {oldurl:'/writer-services/casino-gaming-content-writing/images/mob-banner.jpg',newurl: '/writer-services/casino-gaming-content-writing/'},
    {oldurl:'/writer-services/education-content-writing/images/mob-banner.jpg',newurl: '/writer-services/education-content-writing/'},
    {oldurl:'/writer-services/legal-writing/images/mob-banner.jpg',newurl: '/writer-services/legal-writing/'},
    {oldurl:'/writer-services/mental-health-writer/images/mob-banner.jpg',newurl: '/writer-services/mental-health-writer/'},
    {oldurl:'/writer-services/real-estate-writer/images/mob-banner.jpg',newurl: '/writer-services/real-estate-writer/'},
    {oldurl:'/writer-services/ebook-writing/images/mob-banner.jpg',newurl: '/writer-services/ebook-writing/'},
    {oldurl:'/writer-services/accounting-writer/images/mob-banner.jpg',newurl: '/writer-services/accounting-writer/'},
  ]

  rurls.forEach((item) => {     
    createRedirect({
      fromPath: item.oldurl,
      toPath: item.newurl,
      redirectInBrowser: true,
      isPermanent: true,
    });
  })
  
if (page.path.match(/sign|reset/)) {
    page.context.layout = "mini";
    createPage(page);
  } else if (page.path.match(/coming/)) {
    page.context.layout = "coming";
    createPage(page);
  }
  else if (page.path.match(/literistic/)) {
    page.context.layout = "noheader";
    createPage(page);
  }
  else if (page.path.match(/test/)) {
    page.context.layout = "test";
    createPage(page);
  }  
  else if (page.path.match(/lp/)) {
    page.context.layout = "headercenterfooter";
    createPage(page);
  }
  else if (page.path.match(/blogsingle/)) {
    page.context.layout = "header";
    createPage(page);
  }  
  else if (page.path.match(/pricing/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
  else if (page.path.match(/get-a-quote/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
  else if (page.path.match(/leadgen-page-master/)) {
    page.context.layout = "noheadernofooter";
    createPage(page);
  }
  else if (page.path.match(/calculate-content-roi/)) {
    page.context.layout = "noheadernofooter";
    createPage(page);
  }
  else if (page.path.match(/get-ten-free-topic-ideas/)) {
    page.context.layout = "noheadernofooter";
    createPage(page);
  }
  else if (page.path.match(/free-seo-audit/)) {
    page.context.layout = "noheadernofooter";
    createPage(page);
  }
  else if (page.path.match(/get-free-content-samples/)) {
    page.context.layout = "noheadernofooter";
    createPage(page);
  }
    else if (page.path.match(/thank-you-audit/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
  else if (page.path.match(/thank-you-samples/)) {
    page.context.layout = "noheaderfooter";
    createPage(page);
  }
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
const DEFAULT_BLOG_POSTS_PER_PAGE = 6;

const basePath = DEFAULT_BLOG_BASE_PATH;
const blogs = data.Blogs.edges;

const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE; 

blogs.forEach(({ node }) => {     
  createPage({
    path: `/blog/${node.data.category.document.uid}/${node.uid}/`,
    component: path.resolve("./src/templates/blog-template.js"),
    context: {
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
      id:node.id,
      layout:'writing-jobs'
    },
  })
})


}
