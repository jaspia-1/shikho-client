import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>

            <div className='bg-dark mx-auto container rounded p-5 my-5 '>
                <h4 className='text-danger display-1 text-center my-5 fw-bold'>Page NOT FOUND</h4>
                <div className='d-flex justify-content-center'>
                    <Link to='/'><button className='btn btn-outline-info '>Go Home</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Error;