import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import AllCatagory from '../AllCatagory/AllCatagory';
import Course from '../Course/Course';

const CatagoryCourse = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <Container>


            <Row>

                <Col md={3} className="d-none  d-md-block" >



                    <AllCatagory></AllCatagory>

                </Col>
                <Col md={9} xs={12}>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-5">

                        {
                            courses.map((course, idx) => <Course key={idx} course={course}></Course>)
                        }
                    </Row>
                </Col>


            </Row>




        </Container >
    );
};

export default CatagoryCourse;