import React from 'react';
import { useContext } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext/UserContext';

const CheckOut = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const notify = () => toast("Congratualtion!");

    return (
        <div className='bg-dark text-white my-3 rounded container d-md-flex align-items-center' style={{ maxWidth: "870px" }}>
            <div style={{ maxWidth: "500px" }} className="  mx-auto  my-5">
                <div className='p-3'>


                    <h5 className='text-center gray-text fs-1 text-info fw-bolder p-4'>Check Out</h5>
                    <div className='w-100 d-flex'>

                        <img src={course.img} alt="" className=' mx-auto rounded border m-3 ' />
                    </div>
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Title:</p>
                        <p className='text-end'>{course.title}</p>

                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Owner:</p>
                        <p className='text-end'>{course.name}</p>

                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Price:</p>
                        <p className='text-end '>${course.price}</p>
                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Buyer:</p>
                        <p className='text-end '>{user?.displayName}</p>
                    </div>
                    <hr />
                    <button onClick={notify} className='btn btn-info my-2 w-100'>Buy</button>

                </div>
            </div>
            <div className='container p-3 '>
                <div className='shadow border p-3 '>

                    <p>{course.description}</p>
                </div>
                <h1 className='p-4 fw-bold'><span style={{ "color": "rgb(194, 9, 194)" }}>S</span>hi<span style={{ "color": "gold" }}>kho</span></h1>
            </div>
        </div>
    );
};

export default CheckOut;