import React from "react"
// import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import Layout  from '../components/layout';


export default () => (
    <Layout headerText="About Gatsby">
        <Helmet title="About" />
        <article>
            <p>This is not home but About.</p>
        </article>
    </Layout>
  )