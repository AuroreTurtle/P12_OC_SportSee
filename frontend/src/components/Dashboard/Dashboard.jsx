// Import CSS
import "./Dashboard.css";

// Import components to display
import User from "../User/User";
import Card from "../Card/Card.jsx";
import BarChart from "../Charts/BarChart/BarChart";
import LineChart from "../Charts/LineChart/LineChart.jsx";
import RadarChart from "../Charts/RadarChart/RadarChart.jsx";
import RadialBarChart from "../Charts/RadialBarChart/RadialBarChart.jsx";

// Import nutrient icons
import caloriesIcon from "../../assets/nutrients/calories.svg";
import proteinsIcon from "../../assets/nutrients/proteins.svg";
import carbsIcon from "../../assets/nutrients/carbs.svg";
import lipidsIcon from "../../assets/nutrients/lipids.svg";

/**
 * It returns React Component that displays the dashboard of user with all charts.
 * @return  A React component
 */
function Dashboard({ userData, activityData, sessionData, performanceData }) {
    return (
        <main>
            <div>
                <User userName={userData.userInfos.firstName} />
                <div id="stats">
                    <div id="chart">
                        <BarChart data={activityData.sessions} />
                        <div id="chart-small">
                            <LineChart data={sessionData.sessions} />
                            <RadarChart data={performanceData.data} kind={performanceData.kind} />
                            <RadialBarChart data={userData.score || userData.todayScore} />
                        </div>
                    </div>

                    <div id="cards">
                        <Card icon={caloriesIcon} total={userData.keyData.calorieCount} unit="kCal" type="Calories" />
                        <Card icon={proteinsIcon} total={userData.keyData.proteinCount} unit="g" type="Proteines" />
                        <Card icon={carbsIcon} total={userData.keyData.carbohydrateCount} unit="g" type="Glucides" />
                        <Card icon={lipidsIcon} total={userData.keyData.lipidCount} unit="g" type="Lipides" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
