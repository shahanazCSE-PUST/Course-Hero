import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="nav-container">
                <h1 className="text-primary s-name">Course Hero</h1>
            <Nav className="my-nav">
                <NavItem className="my-item">
                    <NavLink className="my-link" to="/home">Home</NavLink>
                </NavItem>
                <NavItem className="my-item">
                    <NavLink className="my-link" to="/services">Services</NavLink>
                </NavItem>
                <NavItem className="my-item">
                    <NavLink className="my-link" to="/about">About Us</NavLink>
                </NavItem>
                <NavItem className="my-item">
                    <NavLink className="my-link" to="/contact">
                       Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Header;