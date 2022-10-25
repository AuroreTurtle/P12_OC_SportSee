/**
 * It creates a class to use as a model for the API call.
 */
class sessionDataModel {
    /**
     *
     * @param {number} userId The user id
     * @param {Array} sessions An array containing the days of the week (number) and the length of the sports session (number)
     */
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}

export default sessionDataModel;
