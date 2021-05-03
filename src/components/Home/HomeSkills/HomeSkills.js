import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomeSkills = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    },[])
    return (
        <div className="container">
            <h2 data-aos="fade-up" className="text-center home-project-text-style">Skills</h2>
            <hr className="mb-5" />
            <div data-aos="flip-left" className="row d-flex justify-content-center border">
                <div className="about-text-style col-12 d-flex justify-content-center">
                    <div>
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
                                <h5>&nbsp;&nbsp;MaterialUI</h5>
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
        </div>
    );
};

export default HomeSkills;