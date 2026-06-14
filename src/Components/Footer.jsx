import React from "react";
import "../Styles/Footer.css";
import logo from "../images/logo.jpeg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Section */}
                <div className="footer-left">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <div className="social-icons">
                        <div className="icon-box"><FaFacebookF /></div>
                        <div className="icon-box"><FaTwitter /></div>
                        <div className="icon-box"><FaInstagram /></div>
                        <div className="icon-box"><FaLinkedinIn /></div>
                        <div className="icon-box"><FaYoutube /></div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="footer-middle">
                    <h3>Address</h3>
                    <p>📍 Sector 79 SAS Nagar, Mohali</p>
                    <p>📧 constructioncompanykkamboj@gmail.com</p>
                    <p>📞 9814501114,9781885286</p>
                    <p>🌐 https://Construction.com</p>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Work</li>
                    </ul>
                </div>


            </div>

            <div className="footer-bottom">
                <p>
                    Copyright ©2026 All rights reserved </p>

            </div>
        </footer>
    );
};

export default Footer;