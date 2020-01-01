import React from "react"
import { graphql, Link } from 'gatsby';
// import { kebabCase } from 'lodash';
import {Helmet} from "react-helmet";
import Layout  from '../components/layout';

const TeamPage = ({data}) => {
    const allTeam = data.allKenticoCloudItemTeamMember.edges;
    console.log(allTeam);
    return (
        <Layout headerText="Team">
            <Helmet title="Team" />
            <article>
                <nav className="subnav text-center">
                <ul>
                    {allTeam.map(team => (
                        <li key={team.node.id}>
                            <Link to={`/team/${team.node.fields.slug}`}>
                                {team.node.elements.name.text} <span className="small">({team.node.elements.code_name.text})</span>
                            </Link>
                        </li>    
                    ))}
                </ul>
                </nav>
            </article>
        </Layout>
    );
};

export default TeamPage;


export const pageQuery = graphql`
query {
    allKenticoCloudItemTeamMember {
        edges {
            node {
                elements {
                    name {
                        text
                    }
                    code_name {
                        text
                    }
                }
                fields {
                    slug
                }
                id
            }
        }
    }    
}
`;
