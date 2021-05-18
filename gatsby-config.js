module.exports = {
  siteMetadata: {
    title: `Strategically Strategically | Content Writing Agency`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       // The property ID; the tracking code won't be generated without it
       trackingId: "UA-127625937-1",
     },
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
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
      pixelId: "955347335241110",
      },
    },
  ],
}
