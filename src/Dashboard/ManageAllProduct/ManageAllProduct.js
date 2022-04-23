
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EditProducts from './EditProducts';

import {RiDeleteBin6Line} from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageAllProduct = () => {

    const [dataDelete, setDataDelete] = useState([]);

    const [openOrder, setOpenOrder] = useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
  const handleOrderClose = () => setOpenOrder(false);
  
  const notify = () => toast.success("Deleted successfully!", {autoClose: 2000, position: "top-center"});

    useEffect(() => {
        fetch('https://whispering-retreat-24780.herokuapp.com/package')
        .then ( res => res.json())
        .then ( data => setDataDelete(data));
    },[])
   
  
      const handleDelete = id => {
        const url = `https://whispering-retreat-24780.herokuapp.com/package/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            
            if(data.deletedCount) {
              // alert('Data Delete Successfully');
              notify();
                const remaining = dataDelete.filter(pl => pl._id !==id)
                setDataDelete(remaining);
            }
        })
    }

    return (
      <div className='mt-5 container pt-2 bg-black text-warning'>
        <ToastContainer/>
        <h1 className='text-center mb-3 fw-bold fst-italic'>Manage All Products</h1>
        <Table striped bordered hover variant="light" >
          <thead>
            <tr className="text-center">
              <th scope="col">Image</th>
              <th scope="col">Package Name</th>
              <th scope="col">Price</th>
              <th scope="col">Location</th>
              <th scope="col">Duration</th>
              <th scope="col">Trip Type</th>
              <th scope="col">Instructor</th>
              {/* <th scope="col">Description</th> */}
            
              <th scope="col">Action</th>
            </tr>
          </thead>
            {
              dataDelete.map(pl => 
                
                <tbody className='text-warning' key ={pl._id}>
                <tr className='text-warning'>
                    <td><img src={pl?.img} style={{width:"80px", height:"80px", objectFit:"cover", borderRadius: "5%"}} alt="" /></td>
                    <td>{pl?.title}</td>
                    <td>{pl?.price}</td>
                    <td>{pl?.location}</td>
                    <td>{pl?.time}</td>
                    <td>{pl?.type}</td>
                    <td>{pl?.person}</td>
                    {/* <td>{pl.desc}</td> */}
                    
                    <td className="text-center">
                    <button className="btn btn-warning p-1 m-1" onClick={ () => handleDelete(pl._id)}><RiDeleteBin6Line/></button>
                    <button className="btn btn-success p-1 m-1" onClick={handleOrderOpen}><BiEdit/></button>
                    </td>
                </tr>
            </tbody>
              )
            }
        </Table>
        <EditProducts
          key ={dataDelete._id}
          handleOrderClose = {handleOrderClose}
          openOrder = {openOrder}
          dataDelete={dataDelete}
        ></EditProducts>
        </div>
    );
};

export default ManageAllProduct;