import DashboardLayout from "../../template/DashboardLayout";
import StackCards from "../../ui/molecules/StackCards/StackCards";
import PerformanceCard from "../../ui/molecules/PerformanceCard/PerformanceCard";
import {DashboardContainer, DashboardBody} from "./Dashboard.styles";

const Dashboard = () => {
    return (
        <div>
            <DashboardLayout>
                <DashboardContainer>
                    <DashboardBody>
                        <StackCards />
                        <PerformanceCard />
                    </DashboardBody>
                </DashboardContainer>
            </DashboardLayout>
        </div>
    )
}

export default Dashboard
