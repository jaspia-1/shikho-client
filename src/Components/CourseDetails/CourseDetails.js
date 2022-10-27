import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { FaStar, FaRegClock, FaMoneyBillAlt, FaArrowCircleLeft, FaPrint } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';
import AllCatagory from '../Shared/AllCatagory/AllCatagory';
import { useReactToPrint } from 'react-to-print';
const CourseDetails = () => {
    const [toogle, setToogle] = useState(false);
    const course = useLoaderData();
    console.log(course);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div >
            <Container>


                <Row>
                    <Col md={3} className="d-none  d-md-block">
                        <AllCatagory></AllCatagory>
                    </Col>
                    <Col md={9} xs={12} className="order-sm-2   order-md-1  ">

                        <div className='container d-flex m-3  coursesContainer '>
                            <div className='   p-4 container rounded ' ref={componentRef}>

                                <div className='d-lg-flex w-100 shadow'>
                                    <div>
                                        <img src={course.img} alt="" className=" rounded fluid shadow border border-success" />
                                    </div>
                                    <div className='p-3'>
                                        <div className='d-lg-flex '>
                                            <h1 className='fw-bolder '>{course.title}</h1>

                                            <div><button onClick={handlePrint} className='btn btn-outline-info m-2'><FaPrint /></button></div>
                                        </div>
                                        <h4 className='text-end fw-bold text-secondary'>{course.name}</h4>

                                        <p className='text-secondary'>{course.description}</p>

                                        <p className='text-start' ><FaStar className='text-warning me-2  ' />{course.rating}</p>
                                        <div className='d-flex justify-content-between m-0'>
                                            <p className='m-0' ><FaRegClock className='text-warning me-2 ' />{course.duration}</p>
                                            <p className='  ' ><FaMoneyBillAlt className='text-success me-2 ' />${course.price}</p>
                                        </div>
                                        <div className=' '>
                                            <Link className='' to={`/catagorycourses/${course.catagory}`} ><button className='rounded btn btn-outline-info m-3'><FaArrowCircleLeft /></button></Link>
                                            <Link to={`/checkout/${course.id}`}><button className='btn btn-info m-3 mx-auto'>Get premium access</button></Link>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </Col>


                </Row>
            </Container>

        </div>
    );
};

export default CourseDetails;