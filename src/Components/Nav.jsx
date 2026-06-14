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
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;