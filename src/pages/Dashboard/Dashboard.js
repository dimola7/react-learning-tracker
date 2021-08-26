import Navbar from "../../components/Navbar/Navbar";
import SideNav from "../../components/SideNav/SideNav";
import ResponsiveSideNav from "../../components/ResponsiveSideNav/ResponsiveSideNav";
import StackCards from "../../components/StackCards/StackCards";
import PerformanceCard from "../../components/PerformanceCard/PerformanceCard";
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
