import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
            <div className="mx-auto text-white py-5 my-footer">
                <div className="my-link text-center">
                    <Link className="p-3 d-inline-block text-white" to="/about">About</Link>
                    <Link className="p-3 d-inline-block text-white" to="/feature">Features</Link>
                    <Link className="p-3 d-inline-block text-white" to="/services">Services</Link>
                    <Link className="p-3 d-inline-block text-white" to="/careers">Careers</Link>
                    <Link className="p-3 d-inline-block text-white" to="/help">Help</Link>
                    <Link className="p-3 d-inline-block text-white" to="/policy">Privacy Policy</Link>
                </div>
        
                <p className ="text-center">&reg; 2021 All rights reserved</p>
            </div>
    );
};

export default Footer;