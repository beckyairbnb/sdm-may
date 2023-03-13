require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Strategically | Content Writing Agency`,
    description: `Content writing agency`,
    siteUrl: "https://strategically.co",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: "https://strategically.co",
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
          webpOptions: { quality: 100 },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "strategically",
        schemas: {
          f: require("./custom_types/f.json"),
          price_table: require("./custom_types/price_table.json"),
          blog: require("./custom_types/blog.json"),
          blog_category: require("./custom_types/blog_category.json"),
          blog_listing_page: require("./custom_types/blog_listing_page.json"),
          service: require("./custom_types/service.json"),
          career: require("./custom_types/career.json"),
          page: require("./custom_types/page.json"),
          writingjobs: require("./custom_types/writingjobs.json"),
          copyrighting_service: require("./custom_types/copyrighting_service.json"),
          child_service: require("./custom_types/child_service.json"),
          an_unused_type: {},
          htmlSerializer: ({ node, key, value }) => (
            type,
            element,
            content,
            children
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
        output: "/",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://strategically.co/",
        sitemap: "https://strategically.co/sitemap-0.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
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
    {
      resolve: `gatsby-plugin-htaccess-redirects`,
      options: {
        prefix: "<IfModule mod_rewrite.c>\nRewriteEngine On",
        suffix: "</IfModule>",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-127625937-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          includeInDevelopment: true,
          head: true,
        },
        environments: ["production", "development"],
      },
    },
  ],
};

