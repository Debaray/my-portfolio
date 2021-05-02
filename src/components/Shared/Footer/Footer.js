import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer sticky="bottom" className="copyRight text-center bg-dark">
                <p>Copyright Debashis Ray {(new Date()).getFullYear()} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;