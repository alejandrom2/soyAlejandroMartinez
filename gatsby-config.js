const config = require("./config/SiteConfig");
const urljoin = require("url-join");

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: urljoin(config.siteUrl, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
      )}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-sass",
    "gatsby-plugin-lodash",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alejandro Martinez',
        short_name: 'AlejandroM2',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: `minimal-ui`,
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    'gatsby-plugin-offline',
    "gatsby-plugin-netlify"
  ],
}
