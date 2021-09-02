import { Link } from "react-router-dom";
import { LoginContainer, Left, Right, Text } from "./Login.styles";
import {Button} from "../../ui/atoms/Buttons/Button.styles";
import { Image } from "../../ui/atoms/Images/Images.styles";
import logo from "../../assets/img/logo.svg";
import teamsLogo from "../../assets/img/Teams.png";

const Login = () => {
    return (
        <LoginContainer>
            <Left />
            <Right>
                <Image width="45px" src={logo} alt="decagon"/>
                <Text>Welcome to Decagon’s <br /> Learning Tracker</Text>
                <Image width="45px" src={teamsLogo} alt="decagon"/>
                <Link to="/dashboard">
                    <Button>Login with Microsoft Teams</Button>
                </Link>
            </Right>
        </LoginContainer>
    )
}

export default Login