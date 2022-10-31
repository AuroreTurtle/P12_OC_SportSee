import { useState, useEffect } from "react";

// Import data
import mockData from "../../data/mock.js";
import fetchApiData from "../../data/api";

// Import pages
import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import Error from "../Error/Error";

/**
 * It returns a React component that fetches data from an API and passes it to the Dashboard component.
 * If the data is loaded, render the dashboard, otherwise render an error.
 * @returns A React component
 */
function UserHome() {
    const url = window.location.href;
    const userId = url.split("/").pop();

    //For mock data
    const userMockData = mockData.USER_MAIN_DATA.find((element) => element.id === parseInt(userId));
    const activityMockData = mockData.USER_ACTIVITY.find((element) => element.userId === parseInt(userId));
    const sessionMockData = mockData.USER_AVERAGE_SESSIONS.find((element) => element.userId === parseInt(userId));
    const performanceMockData = mockData.USER_PERFORMANCE.find((element) => element.userId === parseInt(userId));

    /* Setting the states of the component. */
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [session, setSession] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const useMockData = false;

    useEffect(() => {
        if (useMockData) {
            setUser(userMockData);
            setActivity(activityMockData);
            setSession(sessionMockData);
            setPerformance(performanceMockData);
            userMockData && activityMockData && sessionMockData && performanceMockData
                ? setIsLoaded(true)
                : setIsLoaded(false);
        } else {
            async function fetchApi() {
                setUser(await fetchApiData(userId, ""));
                setActivity(await fetchApiData(userId, "activity"));
                setSession(await fetchApiData(userId, "average-sessions"));
                setPerformance(await fetchApiData(userId, "performance"));
                setIsLoaded(true);
            }
            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLoaded ? (
        <Dashboard userData={user} activityData={activity} sessionData={session} performanceData={performance} />
    ) : (
        <Error />
    );
}

export default UserHome;
