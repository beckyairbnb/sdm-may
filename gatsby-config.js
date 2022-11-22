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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        schemas: {
          f: require('./custom_types/f.json'),
          price_table: require('./custom_types/price_table.json'),
          blog: require('./custom_types/blog.json'),
          blog_category: require('./custom_types/blog_category.json'),
          blog_listing_page: require('./custom_types/blog_listing_page.json'),
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
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
    {
      resolve: `gatsby-plugin-fastify`,
      options: {
        features: {
          redirects: true,
          reverseProxy: true,
          imageCdn: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-htaccess-redirects`,
      options: {
        prefix: "<IfModule mod_rewrite.c>\nRewriteEngine On",
        suffix: "</IfModule>",
      },
    },
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeId: `ChIJJVOOp00bdkgRMY03j_wc5ng`,
        apiKey: `AIzaSyBRiOs7ivBqYM1-nuIzzYe5Ku3wihThcNY`,
        language: "en-US", // optional, defaults to en-US
      },
    },    
    {
    resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-127625937-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          includeInDevelopment: true,
          head: true
        },
        environments: ['production', 'development']
      },
    },
  ],
}


// {
//   resolve: `gatsby-source-google-reviews-en`,
//   options: {
//     placeId: `ChIJJVOOp00bdkgRMY03j_wc5ng`,
//     apiKey: `AIzaSyBRiOs7ivBqYM1-nuIzzYe5Ku3wihThcNY`,
//   },
// },


    // {
    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: 'baad053f-4aa3-4ba7-81c2-540fe4ea2127',
    //     enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    // },