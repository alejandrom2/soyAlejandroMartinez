module.exports = {
  siteTitle: "Alejandro Martinez", // Site title.
  siteTitleShort: "Alejandro M2", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Student | Developer | Latinx", // Alternative site title for SEO.
  siteLogo: "/assets/sticker.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.aleajndromartinez.soy", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-128156786-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "@alejandrom2", // Username to display in the author segment.
  userTwitter: "@alejandrom2", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Los Angeles, CA", // User location to display in the author segment.
  userAvatar: "/assets/sticker.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/alejandrom2",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/soyalejandrom2",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:hi@alejandromartinez.soy",
      iconClassName: "fa fa-envelope"
    }
  ],
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};