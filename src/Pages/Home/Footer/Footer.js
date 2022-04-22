import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';



const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return (
        <div className='footer'>
            <div className='element container'>
            <div className="col"> <span className='logo'>Wild-Life</span> <br />
                    <h4 style={{cursor: 'pointer'}}> <BsFacebook /> <AiOutlineInstagram /> <AiOutlineTwitter /> <AiFillLinkedin /> <AiOutlineMail /> </h4>
                    <br />
                    <button  onClick={topFunction} className="btn1">Scroll To Top</button>
            </div>
                <div className="col">
                    <h3>Contact Us</h3>
                    <p>Customer Support</p>
                    <p>survice Gaurantee</p>
                    <p>Website Feedback</p>
            </div>
                <div className="col">
                    <h3>About</h3>
                    <p>About Wild-Life Travel</p>
                    <p>News</p>
                    <p>Privacy Statement</p>
            </div>
                <div className="col">
                    <h3>Other Services</h3>
                    <p>Investor Relations</p>
                    <p>WildLife Travel Reward</p>
                    <p>List My Hotel</p>
                    <p>All Hotels</p>
                </div>
                </div>
        </div>
    );
};

export default Footer;