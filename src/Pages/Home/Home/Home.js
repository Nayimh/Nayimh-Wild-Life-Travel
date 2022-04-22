import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import SubBanner from '../SubBanner/SubBanner';
import Explore from '../Explore/Explore';
import SubExplore from '../Explore/SubExplore';
import Ratings from '../Ratings/Ratings';
import Partner from '../Partner/Partner';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    return (
        <div className='home'>

            <Header />
            <Banner />
            <SubBanner />
            <Explore />
            <SubExplore />
            <Ratings />
            <Partner />
            <AboutUs/>
        </div>
    );
};

export default Home;