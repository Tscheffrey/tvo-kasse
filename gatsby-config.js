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
        name: "TVO Kasse",
        short_name: "TVO Kasse",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        //icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    ],
}
