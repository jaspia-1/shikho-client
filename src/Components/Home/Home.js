import React from 'react';
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
        </div>
    );
};

export default Home;