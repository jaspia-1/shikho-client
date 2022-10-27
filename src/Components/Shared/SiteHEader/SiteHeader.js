import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AllCatagory from '../AllCatagory/AllCatagory';
import ToggleSwitch from './ToggleSwitch';

const SiteHeader = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/' className="fw-bold navbar-brand" href="#home"><span style={{ "color": "rgb(194, 9, 194)" }}>S</span>hi<span style={{ "color": "gold" }}>kho</span></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <ToggleSwitch className="" label="theme" ></ToggleSwitch>
                            <NavLink className="nav-link" to="/allcourses">Courses</NavLink>
                            <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>


                            <div className='d-md-none'>

                                <AllCatagory></AllCatagory>


                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SiteHeader;