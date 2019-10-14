import React from "react"
// import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';


export default () => (
    <Layout headerText="Home">
        <Helmet title="Home" />
        <article>
            <p>Using Gatsby to use Markdown files as demo blog content and Kentico Cloud for demo team member content.</p>
        </article>
    </Layout>
)