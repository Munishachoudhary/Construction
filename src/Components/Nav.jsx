import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import "../Styles/Nav.css"
const Nav = () => {
    return (
        <div className="nav">
            <div className="Image">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;