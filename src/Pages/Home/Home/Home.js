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
import Footer from '../Footer/Footer';
import Destiny from '../Destiny/Destiny';
import HomeService from '../HomeService/HomeService';


const Home = () => {
    return (
        <div className='home'>

            <Header />
            <Banner />
            <SubBanner />
            <HomeService/>
            <AboutUs />
            <Destiny/>
            <Explore />
            <SubExplore />
            <Ratings />
            <Partner />
            <Footer/>
        </div>
    );
};

export default Home;