import React, { useEffect, useState } from 'react';
import { Figure } from 'react-bootstrap';
import './Gallary.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {
    useEffect(() => {
        AOS.init();
     })
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('./gallary.json')
            .then(res => res.json())
            .then(data=> setImages(data))

    }, [])

    return (
        <div className='container mt-5 pt-5 gdiv'>
            <div className='text-center'>
                <h4 className='maincolor'>TRAVELL GALLARY</h4>
                <h1>YOUR DREAM PLACES</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias ducimus earum?. </p>

            </div>
            <div className='row mt-3'>
                {
                    images.map(image => <div className='col-lg-3 col-md-4 col-sm-6 mt-5 '>
                        <Figure className='glr' data-aos="zoom-in-right" data-aos-duration="1800">
  <Figure.Image className='gimg'
    
    src={image?.img}
  />
  
</Figure>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Gallary;
