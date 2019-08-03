const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.alejandromartinez.soy',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const config = require('./config/SiteConfig')
const urljoin = require('url-join')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: urljoin(config.siteUrl, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl)}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-lodash',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: `https://alejandromartinez.soy`,
        graphQLQuery: `{
          Projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___order, frontmatter___title], order: DESC}) {
            count: totalCount
            data: nodes {
              id
              details: frontmatter {
                title
                color
                link
                icon
                altTitle
                badges
                order
              }
              text: rawMarkdownBody
            }
          }
          Experience: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}}, sort: {fields: [frontmatter___order, frontmatter___title], order: DESC}) {
            count: totalCount
            data: nodes {
              id
              details: frontmatter {
                title
                company
                position
                team
                start_date
                end_date
                city
                state
                color
                link
                altTitle
              }
              text: rawMarkdownBody
            }
          }
        }
        `,
        serializeFeed: results => {
          return { Projects: results.data.Projects, Experience:results.data.Experience}
        },
        feedMeta: {
          name: "Alejandro Martinez",
          description: "",
          title: "Full Stack Software Engineer",
        },
        nodesPerFeedFile: 100,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alejandro Martinez',
        short_name: 'SoyAlejandro',
        start_url: '/',
        background_color: '#181818',
        theme_color: '#181818',
        display: `minimal-ui`,
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: false,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        cookieDomain: 'alejandromartinez.soy',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
