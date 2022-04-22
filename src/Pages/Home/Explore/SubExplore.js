import React from 'react';
import './SubE.css';
import img1 from '../../../Image/icon/support.png';
import img2 from '../../../Image/icon/money.png';
import img3 from '../../../Image/icon/easy.png';
import { Card } from 'react-bootstrap';


const SubExplore = () => {
    return (
        <div className='subexprole mb-5'>
            <div className="container">
            <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-2'>
                    <Card className='ecard'>
            <Card.Img variant="top" src={ img3} />
    <Card.Body>
      <Card.Title>Travel & Tour</Card.Title>
      <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eveniet.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Learn More → </small>
    </Card.Footer>
  </Card>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-2'>

                    <Card className='ecard'>
            <Card.Img variant="top" src={ img1} />
    <Card.Body>
      <Card.Title>Camping</Card.Title>
      <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eveniet.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Learn More → </small>
    </Card.Footer>
  </Card>

                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-2'>
                    <Card className='ecard'>
            <Card.Img variant="top" src={ img2} />
    <Card.Body>
      <Card.Title>adventure Tour</Card.Title>
      <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eveniet.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Learn More → </small>
    </Card.Footer>
  </Card>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SubExplore;