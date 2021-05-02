import React from 'react';
import './Header.css';
import image from '../../../images/myImage.JPG';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

const onLoad = () => {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
const Header = () => {
    return (
        <div style={{ overflow: 'hidden' }} className="d-flex justify-content-center header-style" onLoad={onLoad}>
            <section className="row section-style d-flex align-items-center justify-content-center">
                <div className="col-lg-6 d-flex flex-column align-items-center">
                    <div>
                        <h3 className="header-text-style">👋 Hello I'M</h3>
                        <h1 className="header-text-style text-white" >DEBASHIS RAY</h1>
                        <h3 class="typewrite header-text-style-animation" data-period="1000" data-type='[ "MERN Stack Developer", "Frontend Web Developer", "Love to Develop Website", "Using...","⚛️ React.js","Node.js","Express.js","MongoDB.js","And more..."]'>
                        </h3>
                        <div>
                            <a href="https://drive.google.com/uc?export=download&id=1KSwHDJS4R9g4IAdoHF5r-M0F1natJcMS" target="_blank" rel="noreferrer"><Button className="pl-4 pr-4 pt-2 pb-2 mt-2 download-button-style" variant="primary"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume</Button></a>
                            <Link to="/contactme"><Button className="pl-4 pr-4 mt-2 ml-4 pt-2 pb-2" variant="success"><FontAwesomeIcon icon={faPaperPlane} /> Contact Me</Button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className="img-fluid w-75 img-thumbnail" src={image} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Header;