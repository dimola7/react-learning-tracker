import Navbar from "../../Navbar/Navbar";
import SideNav from "../../SideNav/SideNav";
import ResponsiveSideNav from "../../ResponsiveSideNav/ResponsiveSideNav";
import StackCards from "../../StackCards/StackCards";
import PerformanceCard from "../../PerformanceCard/PerformanceCard";
import dashboardStyles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={dashboardStyles.dashboard}>
            <div className={dashboardStyles.side}>
                <SideNav />
            </div>
            <Navbar />
            <ResponsiveSideNav />
            <div className={dashboardStyles.dashboardBody}>
                <StackCards />
                <PerformanceCard />
            </div>
        </div>
    )
}

export default Dashboard
