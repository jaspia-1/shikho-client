import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="header-bg">
                <div className='d-lg-flex container justify-content-between align-items-center pt-5'>
                    <h1 className='p-2 fw-bold text-white display-3 '>Grab Your Courses & grow your skill</h1>
                    <div>
                        <img src='/assets/header.png' alt="" />
                    </div>

                </div>
            </div>

            <div>
                <Container>
                    <h1 className="p-3 fw-bold my-3">We collaborate with <span className='text-danger'> 275+ </span>leading  <br />universities and companies</h1>


                </Container>
                <div className='company-bg p-3'>
                    <div className='d-flex container py-3   justify-content-evenly'>
                        <img className='img-fluid' style={{ height: "50px" }} src="/assets/company/cimg1.png" alt="" />
                        <img className='img-fluid' style={{ height: "50px" }} src="/assets/company/cimg2.png" alt="" />
                        <img className='img-fluid' style={{ height: "50px" }} src="/assets/company/cimg3.png" alt="" />
                        <img className='img-fluid' style={{ height: "50px" }} src="/assets/company/cimg4.png" alt="" />
                        <img className='img-fluid' style={{ height: "50px" }} src="/assets/company/cimg5.png" alt="" />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;