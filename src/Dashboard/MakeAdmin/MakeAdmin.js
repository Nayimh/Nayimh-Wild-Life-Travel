import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './MakeAdmin.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


    const notify = () => toast.success("made admin successfully!", {autoClose: 2000, position: "top-center"});
    const notify2 = () => toast.warn("sometthing went wrong!", {autoClose: 2000, position: "top-center"});

    const handleAdminSubmit = e => {
        const user = { email };

        const url = 'https://whispering-retreat-24780.herokuapp.com/users/admin';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    
                  
                    notify();
                } else {
                    notify2();
                }
            })
            e.target.reset();
        e.preventDefault();
    }


    return (
        <div className=' pt-5'>
            <div className="col-12 col-lg-6 mx-auto mt-5   bg-black text-warning border rounded-3 shadow-lg">
            <ToastContainer />
            <Form  onSubmit={handleAdminSubmit} className="mx-3 px-3 p-5">
                <Form.Text className="maincolor fw-bold fst-italic mb-1 fs-3">Make Admin</Form.Text>
        
                <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='paragraph'>Type user email address :</Form.Label>
                    <Form.Control onBlur={handleOnBlur} type="email" placeholder="Register user before making admin" />
                </Form.Group>
        
                <button className="mb-3 newbtn"  type="submit">Confirm Admin</button>
            </Form>
            </div>
            </div>
    );
};

export default MakeAdmin;