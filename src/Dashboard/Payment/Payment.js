import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const { id } = useParams();


    


    return (
        <div className='container mt-5 pt-5'>
            <div className='text-center'>
            <h3 className='maincolor'>Pay and get your Ticket</h3>
                
                <p>Package Id: </p>
            
            </div>
        </div>
    );
};

export default Payment;