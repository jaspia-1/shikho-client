import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../UserContext/UserContext';

const Registration = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn, signUp, updateInfo } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleToSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        const name = form.name.value;

        signUp(email, password)
            .then(result => {

                setErrorMsg("Logged In");
                toast("Logged In");

                handletoUpdate(name, url);
                navigate(from, { replace: true });
            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }
    const handletoUpdate = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateInfo(profile)
            .then(() => { })
            .catch(er => { })
    }

    const handleTosignwithGoogle = () => {
        SignInGoogle()
            .then(result => {
                setErrorMsg("Logged In");
                toast("Logged In");

                navigate(from, { replace: true });
                setLoading(false);

            }
            )
            .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }
    const handleTosignwithGithub = () => {
        SignInGithub()
            .then(result => {
                setErrorMsg("Logged In");
                toast("Logged In");

                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }

    return (
        <div>

            <Container>

                <Form onSubmit={handleToSignUp} style={{ maxWidth: "440px" }} className="mx-auto my-5 shadow-lg bg-dark text-info border border-info p-4 rounded" >
                    <h2 className='my-3'>Reistration</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="type" name='name' placeholder="Full name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formurl">
                        <Form.Label>Photo  Url</Form.Label>
                        <Form.Control type="type" name="url" placeholder="url" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {
                            errormsg !== '' && <p className='text-warning'>{errormsg}</p>
                        }
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Sign Up
                    </Button>
                    <p className='my-3 p-2'><small>Already have an account? <Link className='text-decoration-none' to="/login"> create an account</Link> </small></p>
                    <Button onClick={handleTosignwithGoogle} variant="info" className="w-100 ">
                        Sign Up with Google<FaGoogle className='my-auto ms-1' />
                    </Button>
                    <Button variant="warning" onClick={handleTosignwithGithub} className="w-100 my-2">
                        Sign Up with Github <FaGithub className='my-auto ms-1' />
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Registration;