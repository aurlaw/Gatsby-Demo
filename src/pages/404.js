import React from "react"
// import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';


export default () => (
    <Layout headerText="Not Found">
        <Helmet title="Not Found" />
        <article>
            <p className="text-center">Page not found.</p>
        </article>
    </Layout>
)