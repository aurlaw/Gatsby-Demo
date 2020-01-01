import React from "react"
export default (props) => (
    <header>
        {props.children}
        <h2>{props.headerText}</h2>
    </header>
) 