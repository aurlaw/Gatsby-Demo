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
    else if(node.internal.type === 'KenticoCloudItemTeamMember') {
        createNodeField({
            node,
            name: `slug`,
            value: node.elements.url_pattern.value,
          })
    }
};

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const postTemplate = path.resolve('src/templates/postTemplate.js');
    const tagTemplate = path.resolve('src/templates/tagsTemplate.js');
    const teamTemplate = path.resolve('src/templates/teamTemplate.js');

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
            allKenticoCloudItemTeamMember {
                edges {
                  node {
                    fields {
                        slug
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

        // kentico
        const members = result.data.allKenticoCloudItemTeamMember.edges;
        // create blogs
        members.forEach(({node}) => {
            createPage({
                path: `/team/${node.fields.slug}`,
                component: teamTemplate,
                context: {slug: node.fields.slug},
            });
        });        

    });
};