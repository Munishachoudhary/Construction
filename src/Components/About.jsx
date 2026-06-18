import aboutImg from "../images/hero-banner.jpg";
import "../Styles/About.css";
import Footer  from "./Footer"
import Nav from "./Nav";
const About = () => {
    return (
        <section>
            <Nav/>
            <div className="about">
                <div className="about-image">
                    <img src={aboutImg} alt="Construction Site" />
                </div>

                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        We are a trusted construction company specializing in residential,
                        commercial, and industrial projects. With years of experience and a
                        commitment to quality, we deliver projects that meet the highest
                        standards of safety and craftsmanship.
                    </p>

                    <p>
                        Our team of skilled professionals works closely with clients to bring
                        their vision to life, ensuring timely completion and customer
                        satisfaction at every stage.
                    </p>

                    <div className="about-stats">
                        <div>
                            <h3>500+</h3>
                            <p>Projects Completed</p>
                        </div>

                        <div>
                            <h3>15+</h3>
                            <p>Years Experience</p>
                        </div>

                        <div>
                            <h3>300+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default About;