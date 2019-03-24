module.exports = {
  siteMetadata: {
    title: `TDC Works`,
    description: `Startups are Difficult! Well not really. At least not with TDC. The Disruption Challenge (TDC | ©) make startups simple. 
    From Development to Education & Investments, TDCs mission is to get you everything you need to build amazing startups.
    Remember, whenever a wild startup dream appears to you, just keep calm (or not) and reach out to TDC.`,
    author: `@teamTDC (fb.com/tdcsif)`,
    navlinks: [
      { i: 1, label: 'Home', to: '/' },
      { i: 2, label: 'Journey', to: '/journey' },
      { i: 3, label: 'Registration', to: '/registration' },
      { i: 4, label: 'TDC', to: '/tdc' },
    ],
    authnavlinks: [
      { i: 5, label: 'Dashboard', to: '/user' },
      { i: 6, label: 'Resources', to: '/resources' },
      { i: 7, label: 'Feedback', to: '/feedback' },
      { i: 8, label: 'TDC', to: '/tdc' },
    ],
    fblink: `https://www.facebook.com/tdcsif`,
    edulink: `https://educate.thedisruptionchallenge.com`,
    imgs: {
      landingHero: `https://images.unsplash.com/photo-1550784644-7f9460140af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&`,
      registrationHero: `https://images.unsplash.com/photo-1534371517819-3cb56b0e4c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&`,
      journeyHero: `https://images.unsplash.com/photo-1534371517819-3cb56b0e4c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "tdc-workshops",
        short_name: "tdc-works",
        start_url: "/",
        background_color: "#162432",
        theme_color: "#162432",
        display: "minimal-ui",
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
