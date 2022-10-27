import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCatagory from '../Shared/AllCatagory/AllCatagory';
import Course from '../Shared/Course/Course';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://shiko-server-jaspia-1.vercel.app/allcourses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    console.log(courses);
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} className="d-none  d-md-block">
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
            </Container>
        </div>
    );
};

export default AllCourse;