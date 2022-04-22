import React, { useEffect, useState } from 'react';

import img from '../.././../../Image/icon/login.png';

import AOS from "aos";
import "aos/dist/aos.css";

import { Link, useNavigate } from 'react-router-dom';
import { Badge, Form, Spinner } from 'react-bootstrap';
import {FiLogIn} from 'react-icons/fi'
import useAuth from '../../../Firebase/Hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    useEffect(() => {
        AOS.init();
      });

    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();

  const navigate = useNavigate();
  
  const notify = () => toast.warn("Password did not matched!", {autoClose: 1000, position: "bottom-center"});

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
      };
    
      const handleSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
          notify();
          alert('password did not matched!')
          return;
        }
        registerUser(
          loginData?.email,
          loginData?.password,
          loginData?.name,
          navigate
        );
    
        e.preventDefault();
      };
    return (
      <div className="mt-5 pt-5 bg-black">
        <h1 className="text-center maincolor">Register</h1>
        <ToastContainer/>
        <hr className='text-white w-75 mx-auto' />
        <hr className='text-white w-75 mx-auto' />
        <div className="container mt-5">
          <div className="row">
            <div  data-aos="zoom-in-up"
                data-aos-duration="2000" className="col-sm-12 col-md-6 col-lg-6 mb-5">
              {isLoading ? (
                <Spinner animation="border" variant="success" />
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="nfield"
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="efield"
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="p1"
                      onChange={handleChange}
                      placeholder="Enter Password"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password2"
                      id="p2"
                      onChange={handleChange}
                      placeholder="Retype Password"
                      required
                    />
                  </Form.Group>
  
                  <button type="submit" className="cardbtn">
                    Register <FiLogIn/>
                  </button>
                </Form>
              )}
              {user?.email ? (
                <Badge bg="success">user created Successfully</Badge>
                )
                  :
              authError && (
                <Badge bg="danger">
                  something went wrong. Please! try again!
                </Badge>
              )}
  
              <div className="text-warning shadow mt-3 rounded p-1">
                <h5>
                  Already Registered? Please{" "}
                  <Link className='text-warning' to="/login">Login</Link>{" "}
                </h5>
                OR
                <Link className='text-warning' to="/">
                  <h5 >Go Home</h5>
                </Link>
              </div>
            </div>
            <div  data-aos="zoom-in-down"
                data-aos-duration="2000" className="col-sm-12 col-md-6 col-lg-6">
              <img className="w-100 rounded shadow" src={img} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Register;