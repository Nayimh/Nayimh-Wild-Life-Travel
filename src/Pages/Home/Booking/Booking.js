import React, { useEffect, useRef, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router-dom'
import useAuth from '../../Firebase/Hooks/useAuth';
import { Card } from 'react-bootstrap';

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Booking = () => {

  useEffect(() => {
    AOS.init();
});

    const { id } = useParams()
    
    const { user } = useAuth();

    const [bookings, setBookings] = useState([]);
  const [details, setDetails] = useState({});
 

    useEffect(() => {
        fetch('https://whispering-retreat-24780.herokuapp.com/package')
            .then(res => res.json())
            .then(dt => setBookings(dt))
    }, [])

    useEffect(() => {
        const foundDetails = bookings?.find(
          (booking) => booking?._id === id
        );
        setDetails(foundDetails);
    }, [bookings, id]);
    
    const notify = () => toast.success("Successfully Booked!", {autoClose: 1000, position: "bottom-center"});

    // form 
    const phoneRef = useRef();
    const addressRef = useRef();

    const handleOrderSubmit = (e) => {
        const person = user?.displayName;
        const email = user?.email;
        const productId = details?.id;
        const name = details?.title;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const img = details?.img;
        const desc = details?.desc;
        const guide = details?.person;
        const price = details?.price;
        const status = "Pending";
        const ordersInfo = {
          packageId: productId,
          name,
          desc,
          person,
          email,
          phone, 
          address,
            img,
            guide,
          price,
          status,
        };
    
        fetch("https://whispering-retreat-24780.herokuapp.com/booking", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ordersInfo),
        })
          .then((res) => res.json())
          .then((dt) => {
            if (dt?.insertedId) {
              notify();
    
              e.target.reset();
            }
          });
        e.preventDefault();
      };


    return (
        <div
        style={{ backgroundColor: "#000000" }}
        className="container shadow-lg mt-5 pt-5 mb-5"
      >
        <ToastContainer />
        <h1 className="mt-5 text-center text-warning cgHead">
          Our Mission is To Fulfill Your Expectations
        </h1>
        <div className="row align-items-center mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
            <Card 
              data-aos="zoom-in-down"
              data-aos-duration="3000"
              className="shadow-lg"
            >
              <Card.Img variant="top" src={details?.img} />
              <Card.Body>
                <Card.Title>
                  Title : {details?.title} <br />{" "}
                </Card.Title>
                <Card.Text> Guide: {details?.person}</Card.Text>
                <Card.Text>{details?.desc}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <form
              data-aos="zoom-out"
              data-aos-duration="3000"
              className="shadow-lg"
              onSubmit={handleOrderSubmit}
            >
              <input
                type="text"
                className="w-100 my-2 p-1"
                name=""
                id="1"
                defaultValue={user?.displayName || ""}
                disabled
              />
              <input
                type="email"
                className="w-100 my-2 p-1"
                name=""
                id="2"
                defaultValue={user?.email || ""}
                disabled
              />
  
              <input
                type=""
                className="w-100 my-2 p-1"
                name=""
                id="3"
                defaultValue={details?.img || ""}
                disabled
              />
              <input
                type="name"
                className="w-100 my-2 p-1"
                name=""
                id=""
                defaultValue={details?.title || ""}
                disabled
              />
              <input
            
                className="w-100 my-2 p-1"
                name=""
                id="4"
                defaultValue={details?.price}
                disabled
              />
              <input
                type="number"
                className="w-100 my-2 p-1"
                name=""
                id="phone"
                ref={phoneRef}
                placeholder="Your Phone Number"
              />
  
              <textarea
                name=""
                placeholder="Home Address"
                id="6"
                ref={addressRef}
                className="w-100"
                required
              ></textarea>
             
              <input
                className="w-100 cardbtn border-0 p-2 my-2 rounded-1"
                type="submit"
                value="Purchase"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Booking;