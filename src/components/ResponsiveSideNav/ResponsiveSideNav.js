import { Link } from "react-router-dom";
import overview from "../../assets/overview.svg";
import studentIcon from "../../assets/student.svg";
import logOutIcon from "../../assets/logout.svg";
import responsiveNavStyles from "./ResponsiveSideNav.module.css";

const ResponsiveSideNav = () => {
    return (
        <div>
            <nav className={responsiveNavStyles.sideNav}>
                <div className={responsiveNavStyles.iconDiv}>
                    <img src={overview} className={responsiveNavStyles.img} alt="" />
                    <p>Overview</p>
                </div>
                <div className={responsiveNavStyles.iconDiv}>
                    <img src={studentIcon} className={responsiveNavStyles.img} alt="" />
                    <p>Student</p>
                </div>
                <Link to="/" className={responsiveNavStyles.iconDiv}>
                    <img src={logOutIcon} className={responsiveNavStyles.img} alt="" />
                    <p>Log Out</p>
                </Link>
            </nav>
        </div>
    )
}

export default ResponsiveSideNav
