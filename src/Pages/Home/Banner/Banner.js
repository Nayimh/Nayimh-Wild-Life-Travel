import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';



const Banner = () => {
    return (
        <>
        
        <div className='banner'>
            <Container className='testbox'>
                <div >
                    <h5 className='htext'>Welcome to WildLife</h5>
                    <h1 className='caption'>Explore New Worlds <br /> With Us!</h1>
                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Saepe distinctio esse perferendis asperiores odio velit odit expedita </p>

                </div>
                <div className='btnbox'>
                    <button className='btn1'>Book Now</button>
                    <button className='btn2'>Descover More → </button>
                </div>
            </Container>
            </div>
            </>
    );
};

export default Banner;