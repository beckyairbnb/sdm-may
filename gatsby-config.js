require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Strategically | Content Writing Agency`,
    description: `Content writing agency`,
    siteUrl: 'https://strategically.co',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: 'https://strategically.co',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        schemas: {
          price_table: require('./custom_types/price_table.json'),
          blog: require('./custom_types/blog.json'),
          blog_category: require('./custom_types/blog_category.json'),
          service: require('./custom_types/service.json'),
          career: require('./custom_types/career.json'),
          page: require('./custom_types/page.json'),
          writingjobs: require('./custom_types/writingjobs.json'),
          an_unused_type: {},
          htmlSerializer: ({ node, key, value }) => (
            type,
            element,
            content,
            children,
          ) => {
            // Your HTML serializer
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       trackingId: "UA-127625937-1",
     },
   },
   {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      createLinkInHead: true,
      output: '/'
    }      
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://strategically.co/',
      sitemap: 'https://strategically.co/sitemap-0.xml',
      env: {
        development: {
          policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
    }
  },
    {
  resolve: 'gatsby-plugin-crisp-chat',
  options: {
    websiteId: 'baad053f-4aa3-4ba7-81c2-540fe4ea2127',
    enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
  },
  },

  {
    resolve: `gatsby-transformer-remark`,
         plugins: {
           resolve: `gatsby-remark-vscode`,
},
},


    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
      pixelId: "955347335241110",
      },
    },

   
  ],
}
