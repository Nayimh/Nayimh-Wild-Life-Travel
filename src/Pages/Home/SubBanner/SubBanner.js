import React from 'react';
import './SubBanner.css';

import map from '../../../Image/icon/map.png';
import boat from '../../../Image/icon/adventure.png';
import tent from '../../../Image/icon/tent.png';
import active from '../../../Image/icon/activity.png';
import { Card } from 'react-bootstrap';


const SubBanner = () => {
    return (
        <div className='sub'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-2'>
                    <Card className='card'>
            <Card.Img variant="top" src={ map} />
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
                    <div className='col-lg-3 col-md-3 col-sm-2'>

                    <Card className='card'>
            <Card.Img variant="top" src={ tent} />
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
                    <div className='col-lg-3 col-md-3 col-sm-2'>
                    <Card className='card'>
            <Card.Img variant="top" src={ boat} />
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
                    <div className='col-lg-3 col-md-3 col-sm-2'>
                    <Card className='card'>
            <Card.Img variant="top" src={ active} />
    <Card.Body>
      <Card.Title>Outbond Activity</Card.Title>
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

export default SubBanner;