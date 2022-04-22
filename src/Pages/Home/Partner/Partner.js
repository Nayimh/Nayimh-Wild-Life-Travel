import React, { useEffect } from 'react';
import './Partner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '../../../Image/logo/logo.png';
import logo1 from '../../../Image/logo/logo1.png';
import logo2 from '../../../Image/logo/logo2.png';
import logo3 from '../../../Image/logo/logo3.png';
import logo4 from '../../../Image/logo/logo4.png';
import logo5 from '../../../Image/logo/logo5.png';

const Partner = () => {
    useEffect(() => {
        AOS.init();
     })
    return (
        <div className='partner mt-5 p-5 mb-5'>
            <div className='container'>
                <h3 className='maincolor text-center mb-5'>OUR PARTNERS</h3>
                <div className="row text-center">
                    <div data-aos="zoom-in-up" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '130px', marginBottom: "20px"}} src={ logo } alt="" /> </div>
                    <div data-aos="zoom-in-down" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '100%', marginBottom: "20px"}} src={ logo1 } alt="" /> </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '120px', marginBottom: "20px"}} src={ logo2 } alt="" /> </div>
                    <div data-aos="zoom-in-down" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '120px', marginBottom: "20px"}} src={ logo3 } alt="" /> </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '120px', marginBottom: "20px"}} src={ logo4 } alt="" /> </div>
                    <div data-aos="zoom-in-down" data-aos-duration="1800" className='col-lg-2 md-2 sm-6'> <img style={{ width: '120px', marginBottom: "20px"}} src={ logo5 } alt="" /> </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Partner;