import { Link } from "react-router-dom";
import loginStyles from "./Login.module.css";
import logo from "../../assets/logo.svg";
import teamsLogo from "../../assets/Teams.png";

const Login = () => {
    return (
        <div className={loginStyles.login}>
            <div className={loginStyles.loginGrid}>
                <div className={loginStyles.left}></div>
                <div className={loginStyles.right}>
                    <img src={logo} alt="decagon" />
                    <h4>Welcome to Decagon’s <br /> Learning Tracker</h4>
                    <img src={teamsLogo} alt="teams" />
                    <Link to="/dashboard">
                        <button className={loginStyles.button}>Login with Microsoft Teams</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
