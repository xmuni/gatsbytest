/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Gatsby site two',
        description: 'Some random description',
        author: '@johndoe',
        data: ['item 1', 'item 2'],
        person: {name: 'peter', age: 32},
    },
    plugins: [
        // `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/static/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
    ],
}
