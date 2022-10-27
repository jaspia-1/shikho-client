import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Shared/Course/Course';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    console.log(courses);
    return (
        <div>
            <Container>
                <Row>
                    <Col md={9} xs={12}>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-5">

                            {
                                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
                            }
                        </Row>
                    </Col>
                    <Col md={3}>
                        <h1>SideBar</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllCourse;