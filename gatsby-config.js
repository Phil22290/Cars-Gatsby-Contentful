require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
	siteMetadata: {
		title: "Car Overview",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
			  spaceId: process.env.CONTENTFUL_SPACE_ID,
			  // Learn about environment variables: https://gatsby.dev/env-vars
			  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sass"
		
	],
};
