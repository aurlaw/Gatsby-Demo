const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');


exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    if(node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({node, getNode, basePath: `pages`});
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const postTemplate = path.resolve('src/templates/postTemplate.js');
    const tagTemplate = path.resolve('src/templates/tagsTemplate.js');

    return graphql(`
        {
            allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }        
    `).then(result => {
        if(result.errors) {
            return Promise.reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges;
        // create blogs
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: postTemplate,
                context: {slug: node.fields.slug},
            });
        });
        // create tags
        let tags = [];
        _.each(posts, edge => {
            if(_.get(edge, 'node.frontmatter.tags')) {
                tags  = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // eliminate dups
        tags = _.uniq(tags);
        // make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}`,
                component: tagTemplate,
                context: {tag}
            });
        });
    });
};