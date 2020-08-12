const config = require("./config.json")
const infoData = require("./content/data/info.json")

module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    // title: config.title,
    // description: config.description,
    // repoUrl: config.repository_url,
    // about: config.about,
    // contact: config.contact,
    // primaryColor: config.primary_color,
    // infoData: infoData
    title: `Radiant Church`,
    titleTemplate: "%s | Radiant Church",
    description: `Radiant Church is a Gospel centered multi-ethnic church located in North Charleston, SC.`,
    siteUrl: "http://localhost:8000/",
    image: "/og-image.jpg",
  },
  plugins: [{
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/Layout.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/variables/colors";`,
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/data/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: `${__dirname}/content/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    }
  ],
}