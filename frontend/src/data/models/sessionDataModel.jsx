/* It creates a class to use as a model for the API call. */
class sessionDataModel {
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}

export default sessionDataModel;
