import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Booking from './Booking';

const BookingHome = () => {
    return (
        <div style={{overflow: "hidden"}} className='mx-auto'>
            <Header />
            <Booking />
            <Footer/>
        </div>
    );
};

export default BookingHome;