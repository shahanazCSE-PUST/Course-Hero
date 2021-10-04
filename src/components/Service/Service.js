import React from 'react';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { tittle,cost,id,img} = props.service;
    return (
        <div className='service'>
            <div className="text-wrapper">
                <h3>{tittle}</h3>
                <p>Course fee: {cost}Tk.</p>
                <Button variant="Light">Enroll Now</Button>
            </div>
            <div className="img-wrapper">
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default Service;