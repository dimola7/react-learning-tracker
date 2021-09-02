import { Link } from "react-router-dom";
import { Text } from "../../atoms/Text/Text.styles";
import { Image } from "../../atoms/Images/Images.styles";
import { Nav, IconDiv } from "./ResponsiveSideBar.styles";
import overview from "../../../assets/img/overview.svg";
import studentIcon from "../../../assets/img/student.svg";
import logOutIcon from "../../../assets/img/logout.svg";

const ResponsiveSideBar = () => {
    return (
        <Nav>
                <IconDiv>
                    <Image src={overview} alt="" width="20px"/>
                    <Text>Overview</Text>
                </IconDiv>
                <IconDiv>
                    <Image src={studentIcon} alt="" width="20px"/>
                    <Text>Student</Text>
                </IconDiv>
                <Link to="/" style={{color: "#000"}}>
                    <IconDiv>
                        <Image src={logOutIcon} alt="" width="20px"/>
                        <Text>Log Out</Text>
                    </IconDiv>
                </Link>
        </Nav>
    )
}

export default ResponsiveSideBar
