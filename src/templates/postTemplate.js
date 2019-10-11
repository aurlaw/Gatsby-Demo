import React from 'react';
import { graphql, Link } from 'gatsby';
import {Helmet} from "react-helmet";
import { kebabCase } from 'lodash';

import Layout  from '../components/layout';

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
    <Layout headerText={frontmatter.title}>
        <Helmet title={frontmatter.title} />
        <article>
            <time dateTime={frontmatter.date}>{frontmatter.dateFormatted}</time>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {frontmatter.tags ? (
                  <div className="post-tags-container">
                      <span>Tags:</span>
                      <ul className="tagList">
                          {frontmatter.tags.map(tag => (
                              <li key={tag + `tag`}>
                                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                              </li>
                          ))}
                      </ul>
                  </div>        
              ): null}            
        </article>
    </Layout>        
    );
  };
  
export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`;