import React from "react"
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import {Helmet} from "react-helmet";
import Img from 'gatsby-image';
import Layout  from '../components/layout';


const BlogPage =  ({data}) => {
    const posts = data.allMarkdownRemark.edges;
    return (
    <Layout headerText="Blogs">
        <Helmet title="Blogs" />
        <article>
            <p>A list of Blogs</p>
            <div className="post-list">
                {posts.map(post => (
                    <div key={post.node.id} className="post-list__item">
                        <div className="post-list__thumbnail">
                            <Link to={post.node.fields.slug}>
                                <Img
                                fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed} 
                                />
                            </Link>
                        </div>
                        <div className="post-list__content">
                            <h2>{post.node.frontmatter.title}</h2>
                            {post.node.frontmatter.tags ? (
                                <div className="tags-container">
                                    <span>Tags:</span>
                                    <ul className="tagList">
                                        {post.node.frontmatter.tags.map(tag => (
                                            <li key={tag + `tag`}>
                                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>        
                            ): null}
                            <time dateTime={post.node.frontmatter.date}>{post.node.frontmatter.dateFormatted}</time>
                            <div className="post-list__excerpt">
                                <p>{post.node.excerpt}</p>
                            </div>
                            <Link to={post.node.fields.slug}>Read More</Link>
                        </div>                            
                    </div>
                ))}
            </div>
        </article>
    </Layout>

    );
};  

  export default BlogPage;


  export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] })  {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        dateFormatted:date(formatString: "MMMM DD, YYYY")
                        title
                        tags
                        thumbnail {
                            childImageSharp {
                                fixed(width:200, height:200) {
                                ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }      
            }
        }        
    }
  `;