import logo from "../../../assets/img/logo.svg";
import profile from "../../../assets/img/Ellipse.png";
import { Image } from "../../atoms/Images/Images.styles";
import {Nav, LogoIcon} from "./Navbar.styles";

const Navbar = () => {
    return (
        <Nav>
            <LogoIcon src={logo} alt="decagon" />
            <h4>Good day, David</h4>
            <Image src={profile} width="40px" alt="profile" />
        </Nav>
    )
}

export default Navbar
