import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import AllCatagory from '../AllCatagory/AllCatagory';
import ToggleSwitch from './ToggleSwitch';
import { FaUserAlt } from 'react-icons/fa';

const SiteHeader = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handletoLogOut = () => {
        logOut()
            .then(result => {

                console.log("Logged Out")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
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
                        </Nav>
                        <Nav>

                            {
                                (user && user.uid) ? <>
                                    {
                                        (user?.photoURL) ? <Image className='my-auto mx-3' roundedCircle style={{ width: "30px", height: "30px" }} src={user?.photoURL} alt={user?.displayName} title={user?.displayName} /> :
                                            <FaUserAlt className='my-auto mx-3 text-white' />
                                    }

                                    <button onClick={handletoLogOut} className="nav-link btn btn-outline-info ">SignOut</button>

                                </>
                                    :
                                    <>
                                        <NavLink to='/login' className="nav-link">Login</NavLink>
                                        <NavLink to='/signup' className="nav-link">SignUp</NavLink>
                                    </>
                            }

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