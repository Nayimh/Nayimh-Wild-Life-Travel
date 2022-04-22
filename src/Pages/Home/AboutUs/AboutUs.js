import React, { useEffect } from 'react';
import './AboutUs.css';
import img from '../../../Image/img/adventure1.jpg';
import img2 from '../../../Image/img/adventure2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
                   //animation
 useEffect(() => {
    AOS.init();
 })

    return (
        <div className='mt-5 pt-5 mb-5'>
            <div className='container'>
                <div className='row'>
                    <div data-aos="zoom-in-down" data-aos-duration="2000" className='col-lg-6 col-md-6 col-sm-12 mb-5 '>
                        <h3 className='htext  mt-3 mb-5'>About us</h3>
                        <h1 className='mt-2  mb-5'>Travel The World One Place At a Time</h1>
                        <p className='pt-2 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore dolorem dolores eum similique quae veniam cupiditate soluta aliquid beatae, quas consequatur nesciunt odio totam temporibus laudantium facere culpa repellat.</p>
                        <button className='btn1'>Read More</button>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='aimg' src={ img } alt="" />
                        <img className='aimg2 text-center' src={ img2 } alt="" />
                    </div>
               </div>
            </div>
        </div>
    );
};

export default AboutUs;