import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand ><Link className="nav-anchor-style" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center">
                        <Link className="pl-4 pr-4 nav-anchor-style" to="/projects">PROJECTS</Link>
                        <Link className="pl-4 pr-4 nav-anchor-style" to="/blogs">BLOGS</Link>
                        {/* <Link className="pl-4 pr-4 nav-anchor-style" to="/portfolio">PORTFOLIO</Link> */}
                        <Link className="pl-4 pr-4 nav-anchor-style" to="/aboutme">ABOUT ME</Link>
                        <Link className="pl-4 pr-4 nav-anchor-style" to="/contactme">CONTACT ME</Link>
                        <Nav.Link href="https://drive.google.com/uc?export=download&id=1KSwHDJS4R9g4IAdoHF5r-M0F1natJcMS" target="_blank"><Button className="pl-4 pr-4 nav-button-style" variant="outline-success">GET RESUME</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default NavBar;