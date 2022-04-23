import React, { useEffect, useState } from 'react';
import {  Table } from 'react-bootstrap';


import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import useAuth from '../../Pages/Firebase/Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyOrder = () => {

    const { user } = useAuth();
    const [itemOrder, setOrderItem] = useState([]);
    useEffect(() => {
      const url = `https://whispering-retreat-24780.herokuapp.com/booking/${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrderItem(data));
    }, [user?.email]);
  
 
  const handlePayment = () => {
    
    }
   
    const handleDelete = (id) => {
      const url = `https://whispering-retreat-24780.herokuapp.com/booking/${id}`;
      fetch(url, {
          method: 'DELETE'
      })
      .then( res => res.json())
      .then( data => {
          
          if(data.deletedCount) {
            alert('Data Delete Successfully'); 
              const remaining = itemOrder.filter(pl => pl._id !==id)
              setOrderItem(remaining);
          }
      })
  }

    return (
        <div className='mt-5 pt-2 container bg-black text-warning p-5 shadow-lg'>
            <h1 className='text-center mb-3 fw-bold fst-italic FoodHeading'>My Orders</h1>
            <Table striped bordered hover variant="light">
          <thead>
            <tr className="text-center paragraph">
              <th>Image</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
              itemOrder.map(pl => 
                
                <tbody key ={pl._id}>
                <tr style={{letterSpacing: '1.5px', fontWeight: '600', color: 'coral'}}>
                    <td><img className='shadow-lg' style={{width: '80px', height: "80px" , objectFit: 'cover', borderRadius: '5px'}} src={pl?.img} alt="" /></td>
                    <td>{pl.email}</td>
                    <td>{pl.name}</td>
                    <td>{pl.price}</td>
                    <td>{pl.address}</td>
                    <td>{pl.phone}</td>
                    <td>{pl.status === "Pending" ? <p>Pending</p> : <p>Accepted</p> }</td>
                    <td className="text-center">
                    
                              <button className="btn btn-danger ms-2" onClick={() => handleDelete(pl._id)}> <RiDeleteBin6Line /> </button>
                              <Link to={`/payment/${pl._id}`}> 
                                 
                      <button className='btn btn-success ms-2' onClick={() => handlePayment()}> <MdPayment/> </button></Link>
                      
                    </td>
                </tr>
            </tbody>
              )
            }
        </Table>
        </div>
    );
};

export default MyOrder;