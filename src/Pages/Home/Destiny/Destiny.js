import React from 'react';
import './Destiny.css';
import img from '../../../Image/img/garrary4.jpg'

const Destiny = () => {
    return (
        <div className='mt-m pt-5 pb-5 '>
            <div className='container dest'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 disc'>
                        <img src={img} alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 dest'>
                        <h3 className='caption'>New Destination</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iusto.</p>
                        <button className="btn1">Learn More</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Destiny;