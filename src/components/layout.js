import React from "react"
import {Helmet} from "react-helmet";

import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";


export default (props ) => (
  <React.Fragment>
    <Helmet titleTemplate={`%s | Gatsby Demo`}>
      <meta charSet="utf-8" />
    </Helmet>
    <div className="container">
      <Header headerText={props.headerText}>
        <Nav />
      </Header>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  </React.Fragment>
)