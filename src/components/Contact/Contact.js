import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className="container my-container">
            <div class="row mt-5 gx-5">
                <div class="col-lg-6">
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <h2 class="mb-3 fs-1"><span class="my-span">Get</span> in Touch</h2>
                            <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can
                                also use a quick contact form below or visit our office personally.
                                We would be happy to answer your questions.</p>
                        </div>
                    </div>
                    <div class="row gx-3 mb-1">
                        <div class="col-lg-6 form-floating mb-3">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter your name"
                                    aria-label="Recipient's username"
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <div class="row gx-3 mb-1">
                        <div class="col-lg-6 form-floating mb-3">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter your Email"
                                    aria-label="Recipient's username"
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <div class="row gx-3 mb-1">
                        <div class="col-lg-6 form-floating mb-3">
                            <InputGroup className="mb-3">
                                <FormControl className="p-5"
                                    placeholder="Whire a massage"
                                    aria-label="Recipient's username"
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg p-1" type="button">Submit</button>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-5 mt-5 ps-5 border-start border-5">
                    <div class="mt-5">
                        <h4>Phones</h4>
                        <i class="fas fa-phone-alt fs-6 bg-primary p-2 rounded-circle text-white"></i><span> 1-800-1234-567, 1-800-6547-321</span>
                    </div>
                    <div class="mt-3">
                        <h4>E-mail</h4>
                        <i class="far fa-envelope fs-6 bg-primary p-2 rounded-circle text-white"></i><span> info@demolink.org</span>
                    </div>
                    <div class="mt-3">
                        <h4>Address</h4>
                        <i class="fas fa-map-marker-alt fs-6 bg-primary p-2 rounded-circle text-white"></i><span> 2130 Fulton Street San Diego,CA 94117-1080 USA</span>
                    </div>
                    <div class="mt-3">
                        <h4>Opening Hours</h4>
                        <i class="far fa-clock fs-6 bg-primary p-2 rounded-circle text-white"></i><span> Mon-Fri: 8:00am–6:00pm & Sat: 10:00am–4:00pm</span>
                    </div>
                    <div class="iconbar mt-4 text-white">
                        <i class="fab fa-facebook-f bg-primary rounded-circle fs-3"></i>
                        <i class="fab fa-twitter bg-primary rounded-circle fs-3"></i>
                        <i class="fab fa-linkedin-in bg-primary rounded-circle fs-3"></i>
                        <i class="fab fa-google-plus-g bg-primary rounded-circle fs-3"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;