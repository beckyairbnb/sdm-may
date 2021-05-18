module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-127625937-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-crisp-chat/gatsby-browser.js'),
      options: {"plugins":[],"websiteId":"baad053f-4aa3-4ba7-81c2-540fe4ea2127","enableDuringDevelop":false,"defer":true,"enableImprovedAccessibility":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"955347335241110"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
