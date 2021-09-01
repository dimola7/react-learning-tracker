import logo from "../../assets/logo.svg";
import profile from "../../assets/Ellipse.png";
import navbarStyles from "./Navbar.module.css";
import {Nav, LogoIcon, Profile} from "./Navbar.styles";

const Navbar = () => {
    return (
        <Nav>
            <LogoIcon src={logo} alt="decagon" />
            <h4>Good day, David</h4>
            <Profile src={profile} alt="profile" />
        </Nav>
    )
}

export default Navbar
