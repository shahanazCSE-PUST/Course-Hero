import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services-container">
            <h2 className="fw-bold text-center fs-1">Our <span className="text-primary">Services</span></h2>
            <div className="cards-container">
                {
                    services.map(service => <div className='my-card'>
                        <div className="img-wrapper">
                            <img src={service.img} alt="" className="card-img-top" />
                        </div>
                        <div className="text-wrapper">
                            <div className="my-card-body">
                                <h3>{service.tittle}</h3>
                                <p>Course fee:{service.cost}Tk.</p>
                            </div>
                            <div className="btn-wrapper">
                                <button>Enroll Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;