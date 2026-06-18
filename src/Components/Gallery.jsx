import img1 from "../images/img1.jpeg";
import img2 from "../images/img1.jpeg";
import img3 from "../images/img1.jpeg";
import img4 from "../images/img1.jpeg";
import img5 from "../images/img1.jpeg";
import img6 from "../images/img1.jpeg";
import Nav from "./Nav"
import "../Styles/Gallery.css"
import Footer from "./Footer";

const Gallery = () => {
    return (
        <section>
            <Nav />
            <div className="gallery">
                <h2>Our Projects Gallery</h2>
                <p>
                    Explore our completed residential, commercial, and renovation projects.
                </p>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <img src={img1} alt="Project 1" />
                    </div>

                    <div className="gallery-item">
                        <img src={img2} alt="Project 2" />
                    </div>

                    <div className="gallery-item">
                        <img src={img3} alt="Project 3" />
                    </div>

                    <div className="gallery-item">
                        <img src={img4} alt="Project 4" />
                    </div>

                    <div className="gallery-item">
                        <img src={img5} alt="Project 5" />
                    </div>

                    <div className="gallery-item">
                        <img src={img6} alt="Project 6" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Gallery;