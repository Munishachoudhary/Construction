import "../Styles/Home.css";
import Nav from "../Components/Nav"
import ImageSlider from "./Imageslider";
import Footer from "./Footer";
import myVideo from "../Videos/video.mp4"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Nav />
            <div className="text">
                <h2>K-Kamboj Construction Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem nesciunt distinctio aperiam eos perspiciatis illo maxime quaerat assumenda reprehenderit omnis eveniet, ducimus tenetur dolore eius molestias ipsa consequatur. Aperiam, fugit culpa iusto quis natus dolor eum quod eius voluptates.</p>
            </div>
            <ImageSlider />
            <h2 className="heading">Our Services</h2>
            <div className="cards">
                <Link to="/commercial-residential" className="card1">
                    <h3>Commercial/Residential</h3>
                </Link>
                <Link to="/building-construction" className="card2">
                    <h3>Building Construction</h3>
                </Link>

                <Link to="/renovation-works" className="card3">
                    <h3>Renovation Works</h3>
                </Link>

                <Link to="/plastering-painting" className="card4">
                    <h3>Plastering and Painting</h3>
                </Link>

                <Link to="/flooring-works" className="card5">
                    <h3>Flooring Works</h3>
                </Link>

                <Link to="/flat-sale-purchase" className="card6">
                    <h3>Flat Sale & Purchase</h3>
                </Link>
            </div>
            <div className="video-container">
                <h2>Our Latest Construction Projects</h2>
                <video controls>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Footer />
        </div>
    )
}
export default Home;