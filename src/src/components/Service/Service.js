import React from 'react';

const Service = (props) => {
    const { tittle, cost, id, img } = props.service;
    return (
        <div className='service'>
            <div className="text-wrapper">
                <div className="blurry-bg">
                    <h3>{tittle}</h3>
                    <p>Course fee: {cost}Tk.</p>
                    <button>Enroll Now</button>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={img} height="480" alt="" />
            </div>
        </div>
    );
};

export default Service;