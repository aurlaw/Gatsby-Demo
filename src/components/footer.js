import React from "react"
import packageJson from '../../package.json';

export default (props) => (
    <footer>
        &copy;{new Date().getFullYear()}   <span>(v. {packageJson.version})</span>
    </footer>
) 