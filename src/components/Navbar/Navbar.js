import logo from "../../assets/logo.svg";
import profile from "../../assets/Ellipse.png";
import navbarStyles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={navbarStyles.nav}>
            <img src={logo} className={navbarStyles.logo} alt="decagon" />
            <h4>Good day, David</h4>
            <img src={profile} alt="profile" />
        </nav>
    )
}

export default Navbar
