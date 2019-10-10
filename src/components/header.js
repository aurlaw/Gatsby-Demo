import React from "react"
export default (props) => (
    <header>
        <h1>Gatsby Demo</h1>
        {props.children}
        <h2>{props.headerText}</h2>
    </header>
) 