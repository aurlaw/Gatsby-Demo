import React from 'react';
import { graphql } from 'gatsby';

import Layout  from '../components/layout';

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
    <Layout headerText={frontmatter.title}>
        <Helmet title={frontmatter.title} />
        <article>
            <span>{frontmatter.date}</span>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    </Layout>        
    );
  };
  
  export default PostTemplate;

  export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;