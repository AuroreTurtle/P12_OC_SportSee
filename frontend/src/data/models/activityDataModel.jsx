/**
 * It creates a class to use as a model for the API call.
 */
class ActivityDataModel {
    /**
     *
     * @param {number} userId The user id
     * @param {Array} sessions An array containing day (string), kilogram (number) and calories (number)
     */
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}

export default ActivityDataModel;
