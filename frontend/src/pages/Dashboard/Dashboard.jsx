import data from "../../data/mock.js";
import "./Dashboard.css";
import User from "../../components/User/User";
import Error from "../Error/Error";
import Card from "../../components/Card/Card.jsx";
import BarChart from "../../components/Charts/BarChart/BarChart";
import LineChart from "../../components/Charts/LineChart/LineChart.jsx";
import RadarChart from "../../components/Charts/RadarChart/RadarChart.jsx";
import RadialBarChart from "../../components/Charts/RadialBarChart/RadialBarChart.jsx";

import caloriesIcon from "../../assets/nutrients/calories.svg";
import proteinsIcon from "../../assets/nutrients/proteins.svg";
import carbsIcon from "../../assets/nutrients/carbs.svg";
import lipidsIcon from "../../assets/nutrients/lipids.svg";

function Dashboard() {
    const url = window.location.href;
    const userId = url.split("/").pop();
    const userData = data.USER_MAIN_DATA.find((element) => element.id === parseInt(userId));
    const activityData = data.USER_ACTIVITY.find((element) => element.userId === parseInt(userId));
    const sessionData = data.USER_AVERAGE_SESSIONS.find((element) => element.userId === parseInt(userId));
    const performanceData = data.USER_PERFORMANCE.find((element) => element.userId === parseInt(userId));

    return (
        <main>
            {userId ? (
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

                        <div>
                            <Card
                                icon={caloriesIcon}
                                total={userData.keyData.calorieCount}
                                unit="kCal"
                                type="Calories"
                            />
                            <Card icon={proteinsIcon} total={userData.keyData.proteinCount} unit="g" type="Proteines" />
                            <Card
                                icon={carbsIcon}
                                total={userData.keyData.carbohydrateCount}
                                unit="g"
                                type="Glucides"
                            />
                            <Card icon={lipidsIcon} total={userData.keyData.lipidCount} unit="g" type="Lipides" />
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </main>
    );
}

export default Dashboard;
