/* It creates a class to use as a model for the API call. */
class userDataModel {
    constructor(id, userInfos, todayScore, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }
}

export default userDataModel;
