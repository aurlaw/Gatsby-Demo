import React from 'react';
import { Link, graphql } from 'gatsby';
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';

const Tags = ({ pageContext, data  }) => {
    const {tag} = pageContext;
    const {edges, totalCount} = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`;
  return (
    <Layout headerText={tagHeader}>
        <Helmet title={tag}/>
        <article>
        <nav className="subnav text-center">
            <ul>
                {edges.map(({node}) => {
                    const {title, date, dateFormatted} = node.frontmatter;
                    const {slug} = node.fields;
                    return (
                        <li key={slug}>
                            <Link to={slug}>
                                {title} (<time dateTime={date}>{dateFormatted}</time>)
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/tags">All tags</Link>
        </nav>
        </article>
    </Layout>
  );
};

export default Tags;


export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {in: [$tag]}}}
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                        dateFormatted:date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;