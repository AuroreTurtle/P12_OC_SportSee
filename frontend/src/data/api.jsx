// Import different models
import userDataModel from "./models/userDataModel";
import activityDataModel from "./models/activityDataModel";
import sessionDataModel from "./models/sessionDataModel";
import performanceDataModel from "./models/performanceDataModel";

/**
 * It returns the data fetched from the API.
 * @param {string} userID Id of the user we fetch the data
 * @param {string} endpoint Endpoint of the API route used to fetch specific data
 * @return {object} Fetched data
 */
async function fetchApiData(userID, endpoint) {
    const domain = "http://localhost:";
    const port = "3000";
    const urlApi = domain + port + "/user/" + userID + "/" + endpoint;

    const request = await fetch(urlApi)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err.message);
        });

    // Using an object by creating a new instance of the models to standardize the API response.
    const routes = {
        "": new userDataModel(
            request.data.id,
            request.data.userInfos,
            request.data.todayScore || request.data.score,
            request.data.keyData
        ),
        activity: new activityDataModel(request.data.userId, request.data.sessions),
        "average-sessions": new sessionDataModel(request.data.userId, request.data.sessions),
        performance: new performanceDataModel(request.data.userId, request.data.kind, request.data.data),
    };

    return routes[endpoint];
}

export default fetchApiData;
