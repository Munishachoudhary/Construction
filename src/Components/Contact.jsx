import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../Styles/Contact.css"
import Footer from "./Footer";
import Nav from "./Nav";
const Contact = () => {
    return (
        <section>
            <Nav/>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us for your next construction project.</p>

                <div className="contact-container">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3>Get In Touch</h3>

                        <div className="info-box">
                            <FaMapMarkerAlt className="icon" />
                            <p>Sector 79, SAS Nagar, Mohali</p>
                        </div>

                        <div className="info-box">
                            <FaPhoneAlt className="icon" />
                            <p>+91 9814501114</p>
                        </div>

                        <div className="info-box">
                            <FaPhoneAlt className="icon" />
                            <p>+91 9781885286</p>
                        </div>

                        <div className="info-box">
                            <FaEnvelope className="icon" />
                            <p>constructioncompanykkamboj@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Contact;