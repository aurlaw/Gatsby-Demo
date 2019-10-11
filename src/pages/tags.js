import React from "react"
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import {Helmet} from "react-helmet";
import Layout  from '../components/layout';

const TagsPage = ({data}) => {
    const allTags = data.allMarkdownRemark.group;
    return (
        <Layout headerText="Tags">
            <Helmet title="Tags" />
            <article>
                <ul>
                    {allTags.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
        </Layout>
    );
};


export default TagsPage;


export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;

//sort: { order: DESC, fields: [frontmatter___tags.] }
