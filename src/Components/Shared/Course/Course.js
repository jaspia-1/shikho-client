import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock, FaMoneyBillAlt } from 'react-icons/fa';

const Course = ({ course }) => {
    const { catagory, duration, id, img, name, price, rating, title } = course;
    return (

        <div>
            <div class="card text-center rounded h-100 shadow">
                <img src={img} className="fluid" alt="" />

                <div class="card-body">
                    <h5 className="card-title fw-bold ">{title}</h5>
                    <div className='text-start ms-2'>

                        <p className='m-0 text-end text-secondary' >{name}</p>
                        <p ><FaStar className='text-warning me-2  ' />{rating}</p>
                        <div className='d-flex justify-content-between m-0'>
                            <p className='gray-text m-0' ><small> <FaRegClock className='text-warning me-2 ' />{duration}</small></p>
                            <p className='gray-text  ' ><small><FaMoneyBillAlt className='text-success me-2 ' />  ${price}</small></p>

                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <Link to={`/course/${id}`}><button className='btn btn-outline-primary w-100'>Go Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;