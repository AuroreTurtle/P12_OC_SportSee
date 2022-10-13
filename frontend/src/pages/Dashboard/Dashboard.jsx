import data from "../../data/mock.js";
import User from "../../components/User/User";
import Error from "../Error/Error";

function Dashboard() {
    const url = window.location.href;
    const userId = url.split("/").pop();
    const userData = data.USER_MAIN_DATA.find((element) => element.id === parseInt(userId));

    return <main>{userId ? <User userName={userData.userInfos.firstName} /> : <Error />}</main>;
}

export default Dashboard;
