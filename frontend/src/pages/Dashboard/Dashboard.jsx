import data from "../../data/mock.js";
import User from "../../components/User/User";
import Error from "../Error/Error";
import Card from "../../components/Card/Card.jsx";

import caloriesIcon from "../../assets/nutrients/calories.svg";
import proteinsIcon from "../../assets/nutrients/proteins.svg";
import carbsIcon from "../../assets/nutrients/carbs.svg";
import lipidsIcon from "../../assets/nutrients/lipids.svg";

function Dashboard() {
    const url = window.location.href;
    const userId = url.split("/").pop();
    const userData = data.USER_MAIN_DATA.find((element) => element.id === parseInt(userId));

    return (
        <main>
            {userId ? (
                <div>
                    <User userName={userData.userInfos.firstName} />
                    <div>
                        <Card icon={caloriesIcon} total={userData.keyData.calorieCount} unit="kCal" type="Calories" />
                        <Card icon={proteinsIcon} total={userData.keyData.proteinCount} unit="g" type="Proteines" />
                        <Card icon={carbsIcon} total={userData.keyData.carbohydrateCount} unit="g" type="Glucides" />
                        <Card icon={lipidsIcon} total={userData.keyData.lipidCount} unit="g" type="Lipides" />
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </main>
    );
}

export default Dashboard;
