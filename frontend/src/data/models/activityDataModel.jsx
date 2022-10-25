/* It creates a class to use as a model for the API call. */
class activityDataModel {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}

export default activityDataModel;
