import React, { useRef } from 'react';
import {  Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [ signInWithEmailAndPassword,user, loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);
if(loading||sending){
    return <Loading></Loading>
}
    if (user) {
        navigate(from, { replace: true });
    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword =async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email address.');
        }
    
      }

    return (
        <div className='container w-50 mx-auto shadow-lg py-4 px-5 border rounded-3 mt-4'>
            <h2 className='text-warning text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
               
                <input type="submit" className="bg-primary d-block w-100  py-2 border rounded my-4 text-white fs-4" value="Login" />
            </Form>
            <div className="d-flex justify-content-between">
            <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password ? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            </div>
        <SocialLogin></SocialLogin>
        <ToastContainer />
        </div>
    );
};

export default Login;