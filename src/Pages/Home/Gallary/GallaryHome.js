import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Gallary from './Gallary';

const GallaryHome = () => {
    
    return (
        <div style={{overFlow: 'hidden'}}>
            <Header />
            <Gallary />
            <Footer/>
        </div>
    );
};

export default GallaryHome;