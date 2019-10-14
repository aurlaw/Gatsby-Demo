import React from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default (props) => (
    // <nav className="navbar navbar-dark bg-dark">
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="navbar-collapse" id="navbarSupportedContent">
    //         <ul>
    //             <li class="nav-item"> 
    //             <Link to="/">Home</Link>        
    //             </li>
    //             <li class="nav-item"> 
    //             <Link to="/about/">About</Link>        
    //             </li>
    //             <li class="nav-item"> 
    //             <Link to="/blogs/">Blog</Link>        
    //             </li>
    //             <li class="nav-item"> 
    //             <Link to="/team/">Team</Link>        
    //             </li>
    //         </ul>

    //     </div>
    // </nav>
    <Navbar collapseOnSelect expand="lg" bg="dark" >
        <Navbar.Brand><h1>Gatsby Demo</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" >
                <Link to="/">Home</Link> 
                <Link to="/about/">About</Link>    
                <Link to="/blogs/">Blog</Link>     
                <Link to="/team/">Team</Link>       
            </Nav>
        </Navbar.Collapse>
    </Navbar>    
) 