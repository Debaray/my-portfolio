import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="mt-4 mb-5 d-flex align-items-center justify-content-center">
                <a href="https://drive.google.com/uc?export=download&id=1KSwHDJS4R9g4IAdoHF5r-M0F1natJcMS" target="_blank" rel="noreferrer"><Button className="pl-4 pr-4 pt-2 pb-2 mt-2 download-button-style" variant="primary"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume</Button></a>
                <Link to="/contactme"><Button className="pl-4 pr-4 mt-2 ml-4 pt-2 pb-2" variant="success"><FontAwesomeIcon icon={faPaperPlane} /> Contact Me</Button></Link>
            </div>
            <hr className="mb-3" />
            <div className="row d-flex align-items-center">
                <h2 className="text-center about-head-text-style col-3">About Me</h2>
                <h5 className="about-text-style col-7">MERN Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</h5>
            </div>
            <hr className="mb-3" />
            <div className="row d-flex align-items-center">
                <h2 className="text-center about-head-text-style col-lg-3 col-md-9 col-sm-12">Skills</h2>
                <div className="about-text-style col-lg-9 col-md-9 col-sm-12">

                    <div className="row mb-3">
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;React.js</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Node.js</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Express.js</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;MongoDB</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;JavaScript</h5>
                        </div>

                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;JavaScript</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;npm</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Git</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Heroku</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Netlify</h5>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Bootstrap4</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;HTML5</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;CSS3</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Sass</h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 d-flex align-items-center  mr-3">
                            <FontAwesomeIcon className="about-me-icon" icon={faCheckCircle} />
                            <h5>&nbsp;&nbsp;Firebase</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;