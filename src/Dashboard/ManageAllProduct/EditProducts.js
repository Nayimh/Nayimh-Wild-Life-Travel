import React, { useState } from 'react';

import { Col, Form, Row, Button } from 'react-bootstrap';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const EditProducts = ({ openOrder, handleOrderClose, dataDelete }) => {
    const {   title, img, price,  desc, person, time, location, type } = dataDelete;
    
    const initialInfo = {
        productName: title,
        price: price,
       
        
    };


    const [editProduct, seEditProduct] = useState(initialInfo);
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...editProduct};
        console.log(newProduct);
        newProduct[field] = value;
        seEditProduct(newProduct);
    }

    const handleProductSubmit = (e) => {
        const productAdd = {
            ...editProduct
        }
        fetch(`https://whispering-retreat-24780.herokuapp.com/package`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Product Update Successfully');
            }
        })
        e.target.reset();
        e.preventDefault();
    };
    return (
        <div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openOrder}
        onClose={handleOrderClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openOrder}>
          <Box sx={style}>
              <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>
                  <div className="text-center cgHead mb-5"><h2>Update Product Details</h2></div>
                  <Row className="mb-3">
                      <Form.Group as={Col} >
                          <Form.Control type="text" name="name" defaultValue={title} onBlur={handleOnBlur} placeholder="Package Name" required />
                      </Form.Group>
  
                      <Form.Group as={Col}>
                          <Form.Control type="text" name="image" defaultValue={img} onBlur={handleOnBlur} placeholder="Image" required />
                      </Form.Group>
                  </Row>
  
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Control type='number' placeholder="Price" defaultValue={price}  name="price" onBlur={handleOnBlur} />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Control type='text' placeholder="Location" defaultValue={location}  name="location" onBlur={handleOnBlur} />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Control type='text' placeholder="Duration" defaultValue={time}  name="time" onBlur={handleOnBlur} />
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Control type='text' placeholder="GuideName" defaultValue={person}  name="guide" onBlur={handleOnBlur} />
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Control type='text' placeholder="Package Type" defaultValue={type}  name="type" onBlur={handleOnBlur} />
                      </Form.Group>
                  </Row>
  
                  <Form.Group as={Col}>
                      <textarea className="form-control" type='text' defaultValue={desc} name="desc" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                  </Form.Group>
                  
  
                  <div className="text-center mt-5">
                      <Button variant="warning" type="submit" className="w-50" >
                          Submit
                      </Button>
                  </div>
            </Form>
            </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default EditProducts;