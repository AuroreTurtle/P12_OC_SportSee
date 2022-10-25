/**
 * It creates a class to use as a model for the API call.
 */
class userDataModel {
    /**
     *
     * @param {number} id The user id
     * @param {Object} userInfos An object containing the age, firstname and lastname of the user
     * @param {number} todayScore The user's score
     * @param {Object} keyData An object containing the value of the nutrients
     */
    constructor(id, userInfos, todayScore, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }
}

export default userDataModel;
