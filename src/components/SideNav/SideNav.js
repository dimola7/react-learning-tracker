import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import overview from "../../assets/overview.svg";
import student from "../../assets/student.svg";
import logout from "../../assets/logout.svg";
import sideNavStyles from "./SideNav.module.css";

const SideNav = () => {
    return (
        <div>
            <nav className={sideNavStyles.sideNav}>
        <div className={sideNavStyles.sideNavFirstFlex}>
            <div className={sideNavStyles.iconDiv}>
                <img src={logo} alt="decagon" />
            </div>
            <div className={sideNavStyles.iconDiv}>
                <img src={overview} className={sideNavStyles.img} alt="overview" />
                <p>Overview</p>
            </div>
            <div className={sideNavStyles.iconDiv}>
                <img src={student} className={sideNavStyles.img} alt="student" />
                <p>Student</p>
            </div>
        </div>
        <div className={sideNavStyles.sideNavSecondFlex}>
            <Link to="/" className={sideNavStyles.iconDiv}>
                <img src={logout} className={sideNavStyles.img} alt="log out" />
                <p>Log Out</p>
            </Link>
        </div>
    </nav>
        </div>
    )
}

export default SideNav
