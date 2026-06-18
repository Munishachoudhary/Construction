import {
    FaBuilding,
    FaHardHat,
    FaPaintRoller,
    FaHome,
    FaTools,
    FaLayerGroup,
} from "react-icons/fa";

import "../Styles/Services.css"
import Footer from "./Footer";
import Nav from "./Nav"

const Services = () => {
    return (
        <section>
            <Nav />
            <div className="services">
                <h2>Our Services</h2>
                <p>
                    We provide high-quality construction and real estate solutions tailored
                    to your needs.
                </p>

                <div className="services-container">
                    <div className="service-card">
                        <FaBuilding className="service-icon" />
                        <h3>Commercial & Residential Projects</h3>
                        <p>
                            Expert construction services for commercial buildings and homes.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaHardHat className="service-icon" />
                        <h3>Building Construction</h3>
                        <p>
                            End-to-end construction solutions with quality workmanship.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaTools className="service-icon" />
                        <h3>Renovation Works</h3>
                        <p>
                            Transforming existing spaces with modern renovation solutions.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaPaintRoller className="service-icon" />
                        <h3>Plastering & Painting</h3>
                        <p>
                            Professional finishing services for interiors and exteriors.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaLayerGroup className="service-icon" />
                        <h3>Flooring Works</h3>
                        <p>
                            Durable and stylish flooring solutions for every project.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaHome className="service-icon" />
                        <h3>Flat Sale & Purchase</h3>
                        <p>
                            Assistance with buying, selling, and investing in properties.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Services;