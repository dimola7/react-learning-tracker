import { Link } from "react-router-dom";
import { Image } from "../../atoms/Images/Images.styles";
import { Text } from "../../atoms/Text/Text.styles";
import {SideBar, NavTop, NavBottom, IconDiv } from "./SideNav.styles";
import overview from "../../../assets/img/overview.svg";
import logo from "../../../assets/img/logo.svg";
import student from "../../../assets/img/student.svg";
import logout from "../../../assets/img/logout.svg";

const SideNav = () => {
    return (
        <SideBar>
            <NavTop>
                <IconDiv>
                    <Image src={logo} alt="decagon" width="40px" />
                </IconDiv>
                <IconDiv>
                    <Image src={overview} alt="overview" width="22px"/>
                    <Text fontSize= "14px">Overview</Text>
                </IconDiv>
                <IconDiv>
                    <Image src={student} alt="student" width="22px" />
                    <Text fontSize= "14px">Student</Text>
                </IconDiv>
            </NavTop>
            <NavBottom>
                <Link to="/" style={{color: "#000"}}>
                    <IconDiv>
                        <Image src={logout} alt="log out" width="22px" />
                        <Text fontSize= "14px">Log Out</Text>
                    </IconDiv>
                </Link>
            </NavBottom>
        </SideBar>
    )
}

export default SideNav
