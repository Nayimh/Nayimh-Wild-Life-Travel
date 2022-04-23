import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TiTick } from 'react-icons/ti';

import { RiDeleteBin6Line } from 'react-icons/ri';
import useAuth from '../../Pages/Firebase/Hooks/useAuth';

const ManageAllOrders = () => {

    const { user } = useAuth();

    const [status, setStatus] = useState([]);
    const [manageOrder, setManageOrder] = useState([]);
  
    const handleUpdate = id => {
        const productStatus = 'accepted';
        setStatus(productStatus);
  
        const isAccepted = { status };
        const notify = () => toast.success("Order accepted successfully!", {autoClose: 2000, position: "top-center"});
      
      
        const url = `https://whispering-retreat-24780.herokuapp.com/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isAccepted)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   
                  notify();
                    /* const remainingOrders = manageOrder.filter(order => order.status !== 'Pending');
                    setManageOrder(remainingOrders); */
                }
            })
    }
  
    useEffect(() => {
        
        const url = 'https://whispering-retreat-24780.herokuapp.com/booking';
        fetch(url)
            .then(res => res.json())
            .then(data => setManageOrder(data.orders))
    }, [user]);
  
  
  
  
      const [itemOrder, setOrderItem] = useState([]);
    useEffect(() => {
      const url = `https://whispering-retreat-24780.herokuapp.com/booking`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrderItem(data));
    }, []);
  
   
    const handleDelete = (id) => {
      const url = `https://whispering-retreat-24780.herokuapp.com/booking/${id}`;
      fetch(url, {
          method: 'DELETE'
      })
      .then( res => res.json())
      .then( data => {
          console.log(data);
          if(data.deletedCount) {
            
            alert('Data Delete Successfully'); 
              const remaining = itemOrder.filter(pl => pl._id !==id)
              setOrderItem(remaining);
          }
      })
  }


    return (
      <div className='mt-5 p-5 container bg-black text-warning shadow-lg'>
        <ToastContainer/>
        <h1 className='text-center mb-3 fw-bold fst-italic FoodHeading'>Manage All Orders</h1>
      <Table cla striped bordered hover variant="light">
          <thead>
          <tr className="text-center paragraph">
              <th>Image</th>
              <th>Package Name</th>
              <th>Email</th>
              <th> Name</th>
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
                      <tr style={{ letterSpacing: '1.5px', fontWeight: '600', color: 'coral' }}>
                <td><img style={{width:"80px", height:"80px", objectFit:"cover", borderRadius: "5%"}} src={pl?.img} alt="" /></td>
                    <td> <p>{pl.name}</p> </td>
                    <td>{pl.email}</td>
                    <td>{pl.person}</td>
                    <td>{pl.price}</td>
                    <td>{pl.address}</td>
                    <td>{pl.phone}</td>
                    <td>{pl.status === "Pending" ? <p>Pending</p> : <p>Accepted</p> }</td>
                    <td className="text-center">
                     { pl.status === "Pending" && <button onClick={() => handleUpdate(pl._id)} className="btn btn-success " ><TiTick/></button>}
                        
                         
                        
                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(pl._id)}><RiDeleteBin6Line/></button></td>
                </tr>
            </tbody>
              )
            }
      </Table>
      </div>
    );
};

export default ManageAllOrders;