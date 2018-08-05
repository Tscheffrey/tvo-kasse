module.exports = {
  siteMetadata: {
    title: 'TVO Kasse',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TVO Kassenassistent",
        short_name: "TVO Kasse",
        start_url: "/",
        background_color: "#ececec",
        theme_color: "#121212",
        display: "standalone",
        icon: "./src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: '@raygesualdo/gatsby-plugin-babel-styled-components',
      options: {
        displayName: true,
        minify: true,
      },
    },
  ],
}
