import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewPackage = () => {
    const [addProduct, setAddProduct] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        
        newProduct[field] = value;
        setAddProduct(newProduct);
        
    }

    const notify = () => toast.success("added successfully!", {autoClose: 2000, position: "top-center"});

    const handleProductSubmit = e => {
        const productAdd = {
            ...addProduct
        }
        fetch('https://whispering-retreat-24780.herokuapp.com/package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                // alert("Added Succesfully");
                notify();
            }
        })
        e.target.reset();
        e.preventDefault();
    };
    return (
        <div className='container bg-black text-warning'>
            <ToastContainer/>
            <h1 className='text-center mt-5 pt-5 cgHead'>Add New Products</h1>
             <Container className=" px-4 py-5 mb-4 rounded mt-5 d-flex">
                
            <Form className=" col-sm-12 col-md-12 mb-3 mx-auto " onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="title" onBlur={handleOnBlur} placeholder="Package Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control  name="img" onBlur={handleOnBlur} placeholder="Image" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Price" type='number'  name="price" onBlur={handleOnBlur} required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Location" type='text'  name="location" onBlur={handleOnBlur} required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Duration"   name="time" onBlur={handleOnBlur} required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Instructor" type='text'  name="person" onBlur={handleOnBlur} required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Package type" type='text'  name="type" onBlur={handleOnBlur} required/>
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea type='text' className="form-control" name="desc" onBlur={handleOnBlur} rows="3" placeholder="Item Description" required></textarea>
                </Form.Group>
                

                <div className="text-center mt-5">
                    <button  type="submit" className="w-50 btn btn-warning" >
                        Submit
                    </button>
                </div>
          </Form>
          
            </Container>
        </div>
    );
};

export default NewPackage;