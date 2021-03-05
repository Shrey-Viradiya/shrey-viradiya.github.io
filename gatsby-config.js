module.exports = {
  siteMetadata: {
    title: `Shrey Viradiya`,
    name: `Shrey Viradiya`,
    siteUrl: `https://shrey-viradiya.github.io`,
    description: `Portfolio and Personal Blog | Shrey Viradiya | shrey-viradiya.github.io`,
    hero: {
      heading: `I'm Shrey Viradiya. Machine Learning & Deep Learning Enthusiast`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ShreyViradiya`,
      },
      {
        name: `github`,
        url: `https://github.com/Shrey-Viradiya`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/viradiyashrey/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/shrey-viradiya/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shrey Viradiya`,
        short_name: `SV`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
