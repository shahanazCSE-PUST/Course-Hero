import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Button, Col, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,4)));
    }, [])
    return (
        <div>
            <div className="banner">
                <Row className="mt-auto d-flex justify-content-around align-items-center h-100">
                    <Col xs={6} md={4}>
                        <div className="">
                            <h1>Learn Without Limits</h1>
                            <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search our 3000+ courses"
                                    aria-label="Recipient's username"
                                />
                                <Button id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../hero-banner.png" height="480" roundedCircle />
                    </Col>
                </Row>
            </div>
            <div className="our-services">
                <h2 className="fw-bold text-center fs-1">Our <span className="text-primary">Services</span></h2>
                <div className='services'>
                    {
                      services.map(service => <Service
                       key={service.id}
                       service={service}
                      ></Service>) 
                     }
                </div>
            </div>
        </div>
    );
};
export default Home;