import React from 'react';
import { graphql } from 'gatsby';
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';

const TeamTemplate = ({ data }) => {
    const { kenticoCloudItemTeamMember } = data;
    const { elements } = kenticoCloudItemTeamMember;
    const assets = elements.image.assets;
    const image = assets.length !== 0 ? assets[0] : null;
    return (
    <Layout headerText={elements.name.text}>
        <Helmet title={elements.name.text} />
        <article>
            <div className="Grid Grid--gutters Grid--1of3">
                <div className="Grid-cell">
                    {image ? (
                        <figure>
                            <img className="rounded" src={image.url} alt={image.description}/>
                            <figcaption>{elements.title.text}</figcaption>
                        </figure>

                    ) : null }
                </div>
                <div className="Grid-cell pad-w-1"
                dangerouslySetInnerHTML={{ __html: elements.bio.resolvedHtml }}
                >
                </div>
            </div>
        </article>
    </Layout>        
    );
  };

export default TeamTemplate;

export const pageQuery = graphql`
query($slug:String!) {
  kenticoCloudItemTeamMember(elements: {url_pattern: {value: {eq: $slug}}}) {
elements {
        bio {
            resolvedHtml
        }
        name {
            text
        }
        title {
            text
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