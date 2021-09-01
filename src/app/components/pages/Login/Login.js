import { Link } from "react-router-dom";
import loginStyles from "./Login.module.css";
import logo from "../../../assets/logo.svg";
import teamsLogo from "../../../assets/Teams.png";
import {Button} from "../../ui/atoms/Buttons/Buttons.styles";
import {Icon} from "../../ui/atoms/Images/Images.styles";

const Login = () => {
    return (
        <div className={loginStyles.login}>
            <div className={loginStyles.loginGrid}>
                <div className={loginStyles.left}></div>
                <div className={loginStyles.right}>
                    <Icon src={logo} alt="decagon"/>
                    <h4>Welcome to Decagon’s <br /> Learning Tracker</h4>
                    <Icon src={teamsLogo} alt="teams"/>
                    <Link to="/dashboard">
                        <Button>Login with Microsoft Teams</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
