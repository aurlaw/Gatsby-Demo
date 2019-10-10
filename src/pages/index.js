import React from "react"
// import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';


export default () => (
    <Layout headerText="Home">
        <Helmet title="Home" />
        <article>
            <p>This is home</p>
        </article>
    </Layout>
)