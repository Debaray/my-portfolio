import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const ContactMe = () => {
    return (
        <div className="container">
            <h2 className="text-center project-text-style">Contact Me</h2>
                <hr className="mb-5" />
            <div className="d-flex justify-content-center mb-5"> 
                <div className="row container">
                    <div className="col-sm-12 col-lg-7 send-message">
                        <h3 className="mt-3">Send Message</h3>
                        <form id="fcf-form-id" className="fcf-form-className">
                            <div className="fcf-form-group">
                                <label for="Name" className="fcf-label">Your name</label>
                                <div className="fcf-input-group">
                                    <input type="text" id="Name" name="Name" className="fcf-form-control" required />
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <label for="Email" className="fcf-label">Your email address</label>
                                <div className="fcf-input-group">
                                    <input type="email" id="Email" name="Email" className="fcf-form-control" required />
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <label for="Message" className="fcf-label">Your message</label>
                                <div className="fcf-input-group">
                                    <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <Button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block" block>Send Message</Button>
                            </div>

                        </form>
                    </div>
                    <div className="col-sm-12  col-lg-4 get-in-touch ml-lg-5">
                        <h3 className="mt-3">Get in Touch</h3>
                        <hr />
                        <div className="d-flex align-items-center justify-content-start">
                            <FontAwesomeIcon className="icon-style mr-4 " icon={faMapMarkerAlt} />
                            <div>
                                <h4>Address</h4>
                                <h6>Shahjahanpur,Dhaka-1217</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-start">
                            <FontAwesomeIcon className="icon-style mr-4 " icon={faEnvelope} />
                            <div>
                                <h4>Email</h4>
                                <h6>Debaray14@gmail.com</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-start">
                            <FontAwesomeIcon className="icon-style mr-4 " icon={faMobileAlt} />
                            <div>
                                <h4>Phone</h4>
                                <h6>+88 01797357499</h6>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <ul className="social-media list-inline text-center">
                                <li className="list-inline-item"><a href="//facebook.com/deba.ray2020" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//linkedin.com/in/debashis-ray-0829/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faLinkedin} /></a></li>
                                <li className="list-inline-item"><a href="//github.com/Debaray" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com/debaray0829/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactMe;