
import React, { useEffect, useState } from 'react';
import './Ratings.css';
import { Card } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Ratings = () => {
                 //animation
 useEffect(() => {
    AOS.init();
 })

    const [ratings, setRatings] = useState([]);
  
 
    useEffect(() => {
        fetch('https://whispering-retreat-24780.herokuapp.com/reviews')
            .then(res => res.json())
            .then(dt => setRatings(dt))
    }, [])

    return (

        <div className='mt-5 pt-5 mb-5 rbg'>
            <h5 style={{color: '#fcb900'}} className='  text-center'>TESTIMONIAL</h5>
            <h1 className=' text-center'>What They Say</h1>
        <div className='container mt-5'>
            <div className='row'>
            {ratings?.map(rating => 
            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 '>
                    <Card data-aos="zoom-in-right" data-aos-duration="2000" className='rcard  mb-5' >     
                    <Card.Img className='mx-auto mt-1' style={{width: "100px", height: "100px" , borderRadius: "100%"}}  variant="top" src={rating?.img} />
 
  <Card.Body>
                  <Card.Title> <h4 className='text-center'>  Name: { rating?.name } </h4> </Card.Title>
    <Card.Text>
                                <p className='cgpara text-center'>Email: ${rating?.email}  </p> 
    </Card.Text>
 
                            <Card.Text>
                                <p className='text-center'>{rating?.desc}</p>
     
                            </Card.Text>
                            <h4 className='text-center'>  <span style={{color: "gold"}}>{rating?.rating}</span>   </h4> 
  </Card.Body>

                
                       
                             

</Card>
      
          </div> )
          }
            </div>

        </div>
        
    </div>
    );
};

export default Ratings;