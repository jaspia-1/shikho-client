import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { catagory, duration, id, img, name, price, rating, title } = course;
    return (
        // <div >
        //     <div className=' h-100 m-2 card rounded'>
        //         <div className='card-body'>


        //             <div className='w-100'>
        //                 <img src={img} style={{ width: "520px " }} className="img-fluid" alt="" />
        //             </div>
        //             <div className='w-100 p-2  '>
        //                 <h5 className='text-center mt-2 fw-bolder '>{title}</h5>
        //                 <div className='text-start ms-2'>

        //                     <p className='m-0 text-end' >{name}</p>
        //                     <p >{rating}</p>
        //                     <div className='d-flex justify-content-between m-0'>
        //                         <p className='gray-text m-0' ><small> {duration}</small></p>
        //                         <p className='gray-text  ' ><small>  ${price}</small></p>

        //                     </div>
        //                 </div>
        //             </div>
        //             <footer className=' card-footer text-muted '>
        //                 <Link to={`/course/${id}`}><button className='btn btn-outline-primary mb-0 w-100 my-auto'>Go Details</button></Link>

        //             </footer>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div class="card text-center rounded h-100">
                <img src={img} className="fluid" alt="" />

                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <div className='text-start ms-2'>

                        <p className='m-0 text-end' >{name}</p>
                        <p >{rating}</p>
                        <div className='d-flex justify-content-between m-0'>
                            <p className='gray-text m-0' ><small> {duration}</small></p>
                            <p className='gray-text  ' ><small>  ${price}</small></p>

                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    );
};

export default Course;