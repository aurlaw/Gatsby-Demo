import React from 'react';
import { graphql, Link } from 'gatsby';
import {Helmet} from "react-helmet";
// import { kebabCase } from 'lodash';

import Layout  from '../components/layout';

const TeamTemplate = ({ data }) => {
    const { kenticoCloudItemTeamMember } = data;
    const { elements } = kenticoCloudItemTeamMember;
    return (
    <Layout headerText={elements.name.value}>
        <Helmet title={elements.name.value} />
        <article>
         
        </article>
    </Layout>        
    );

  };
  /**
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
   * 
   */
export default TeamTemplate;

export const pageQuery = graphql`
query($slug:String!) {
  kenticoCloudItemTeamMember(elements: {url_pattern: {value: {eq: $slug}}}) {
elements {
        bio {
            value
        }
        name {
            value
        }
        title {
            value
        }
        url_pattern {
            value
        }
        image {
            assets {
                url
                name
                description
            }
        }
    }
  }
}

`;