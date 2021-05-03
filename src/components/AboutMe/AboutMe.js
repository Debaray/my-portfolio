import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    },[])
    return (
        <div className="container">
            <div className="mt-4 mb-5 d-flex align-items-center justify-content-center">
                <a data-aos="slide-right" href="https://drive.google.com/uc?export=download&id=1KSwHDJS4R9g4IAdoHF5r-M0F1natJcMS" target="_blank" rel="noreferrer"><Button className="pl-4 pr-4 pt-2 pb-2 mt-2 download-button-style" variant="primary"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume</Button></a>
                <Link data-aos="slide-left" to="/contactme"><Button className="pl-4 pr-4 mt-2 ml-4 pt-2 pb-2" variant="success"><FontAwesomeIcon icon={faPaperPlane} /> Contact Me</Button></Link>
            </div>
            <hr className="mb-3" />
            <div className="row d-flex align-items-center">
                <h2 data-aos="slide-right" className="text-center about-head-text-style col-3">About Me</h2>
                <h5 data-aos="flip-right" className="about-text-style col-7">MERN Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</h5>
            </div>
            <hr className="mb-3" />
            <div className="row d-flex align-items-center">
                <h2 data-aos="slide-right" className="text-center about-head-text-style col-lg-3 col-md-9 col-sm-12">Skills</h2>
                <div data-aos="flip-right" className="about-text-style col-lg-9 col-md-9 col-sm-12">

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
            <hr className="mb-3" />
            <div className="row d-flex align-items-center">
                <h2 data-aos="slide-right" className="text-center about-head-text-style col-lg-3 col-md-9 col-sm-12 mr-3">Work Experience</h2>
                <div data-aos="flip-right" className="about-text-style col-lg-8 col-md-8 col-sm-12">
                    <h3>1. Programmer</h3>
                    <p className="text-secondary">Punjeree Publications Ltd &nbsp;&nbsp; December,2019 -- Present </p>
                    <ul className="mb-5">
                        <li className="mb-2">Coordinate system testing and assist users with acceptance testing,
                        assisting in the development and maintenance of process models.
                        </li>
                        <li className="mb-2">Develop significant modules of Enterprise Resource Planning(ERP)
                        system such as Billing and Costing, Income Statement, Ledgers, Salary
                        Management, Work Chalan, Work Order, Tax Certificate
                        </li>
                        <li className="mb-2">Provides documentation of development, project progress, analysis,
                        recommendations, either individually or by actively participating in
                        the development process.
                        </li>
                        <li className="mb-2">Maintaining, tuned and repaired applications to keep them performing according to technical and functional specifications, providing
                        user support.
                        </li>
                        <li className="mb-2">Familiar with ASP.Net, C#, Microsoft Dot Net framework.
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="mb-3" />
            <div className="row d-flex align-items-center mb-5">
                <h2 data-aos="slide-right" className="text-center about-head-text-style col-lg-3 col-md-9 col-sm-12 mr-3">Education</h2>
                <div data-aos="flip-right" className="about-text-style col-lg-8 col-md-8 col-sm-12">
                    <ul className="mb-5">
                        <li className="mb-2">B.Sc in Computer Science and Engineering from Ahsanullah University of Science and Technology -- CGPA : 3.269</li>
                        <li className="mb-2"> Higher Secondary School Certificate from Govt. Science College, Dhaka, Bangladesh.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;