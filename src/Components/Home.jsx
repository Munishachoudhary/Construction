import "../Styles/Home.css";
import Nav from "../Components/Nav"
import ImageSlider from "./Imageslider";
import Footer from "./Footer";
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
                <div className="card1">
                    <h3>Commerical/Residental</h3>
                </div>
                <div className="card2">
                    <h3>Building Construction
                    </h3>
                </div>
                <div className="card3">
                    <h3>Renovation works</h3></div>
                <div className="card4"><h3>Plastering and Painting</h3></div>
                <div className="card5"><h3>Flooring Works</h3></div>
                <div className="card6"><h3>Flat Sale & Purchase</h3></div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;