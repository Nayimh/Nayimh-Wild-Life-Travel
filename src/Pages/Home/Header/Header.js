import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';
 import {FiLogOut} from 'react-icons/fi'

import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
    return (
        <div className='nav'>
            <Navbar className='w-100' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand > <span className='logo'> Wild-Life </span>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
                <Nav.Link as={ Link } to="/home">Home</Nav.Link>
      <Nav.Link as={ Link } to="/service">Explore</Nav.Link>
      <Nav.Link as={ Link } to="/gallary">Gallary</Nav.Link>
      <Nav.Link as={ Link } to="/dashboard">Dashboard</Nav.Link>
      
    </Nav>
    <Nav>
              {user.email && (
                <Navbar.Text className="fw-bold fst-italic">
                  {" "}
                  <span className="name">
                    {" "}
                    Hi, {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
              {user?.email ? (
                <Nav.Link >
                  <button className="logBtn" onClick={logout}>
                    Logout<FiLogOut/>
                  </button>
                  </Nav.Link>
                  
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="logBtn">Login</button>
                </Nav.Link>
              )}
            </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;