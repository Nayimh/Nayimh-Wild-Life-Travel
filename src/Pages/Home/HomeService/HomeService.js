
import React, { useEffect, useState } from 'react';
import { Card, Placeholder} from 'react-bootstrap';
import './HomeService.css';
import { GoLocation } from 'react-icons/go';
import { FaRegClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const HomeService = () => {

    useEffect(() => {
        AOS.init();
     })

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://whispering-retreat-24780.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setDetails(data)) 
    },[])

    return (
        <div className='mt-5 pt-5 mb-5'>
            <div className=' container text-center mb-5 serviceh'>
                <h4 className='maincolor mt-2 mb-2'> FEATURED TOUR</h4>
                <h1 className='mt-3 mb-3'>OUR POPULAR TOUR PACKAGES</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, pariatur. </p>
            </div>
            <div className='container'>
            <div className="row">
                {
                    !details?   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card> :
                        details.slice(0,8).map(detail => <div className='col-lg-4 col-md-6 col-sm-12' key={detail?.name}>
                            <Card data-aos="zoom-in-right" data-aos-duration="1800" className='serviceCard'>
                            <Card.Img variant="top" src={ detail?.img } />
    <Card.Body>
                                    <Card.Title>{ detail?.title }</Card.Title>
      <Card.Text> <p>{detail?.desc.slice(0, 80)}</p>
        
                                    </Card.Text>
                                    <div className='text-center mt-4'>
                            <Link to={`/booking/${detail._id}`}>
                                    <button className='cardbtn '>Book Now</button></Link>
                                    </div>
    </Card.Body>
    <Card.Footer>
                                    <div className='fooot'>
                                     <span> <GoLocation/> { detail.location }</span> <span> <FaRegClock/> {detail?.time} </span>  <span>${detail.price}</span>  
      </div>
    </Card.Footer>
  </Card>
                        </div> )
                
            }
            </div>
            </div>
        </div>
    );
};

export default HomeService;