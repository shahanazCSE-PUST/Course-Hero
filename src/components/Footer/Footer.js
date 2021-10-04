import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div>
            <div className="mx-auto bg-dark text-white py-5">
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
        </div>
    );
};

export default Footer;