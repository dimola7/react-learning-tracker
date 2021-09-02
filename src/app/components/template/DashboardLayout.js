import Navbar from "../ui/molecules/Navbar/Navbar";
import SideNav from "../ui/molecules/SideNav/SideNav";
import ResponsiveSideBar from "../ui/molecules/ResponsiveSideBar/ResponsiveSideBar";
import {Layout, Side} from "./DashboardLayout.styles";

const DashboardLayout = ({ children }) => {
    return (
        <Layout>
            <Side>
                <SideNav />
            </Side>
            <Navbar />
            <ResponsiveSideBar />
            <div>
                {children}
            </div>
        </Layout>
    )
}

export default DashboardLayout
