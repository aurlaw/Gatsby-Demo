/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Demo`,
  },  
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,  
    `gatsby-plugin-sharp`,  
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],          
      }
    },
    {
      resolve: `gatsby-source-kentico-cloud`,
        options: {
          deliveryClientConfig: {
            projectId: process.env.KENTICO_PROJECT_ID // Fill in your Project ID
          },
          // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
          languageCodenames: [
                    `default` // Or the languages in your project (Project settings -> Localization)
          ]
      }      
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Demo`,
        short_name: `Gatsby Demo`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#215717`,
        display: `standalone`,
        icon: `src/images/icons/icon.jpeg`,
      }
    },
    `gatsby-plugin-offline`  
  ]
}
