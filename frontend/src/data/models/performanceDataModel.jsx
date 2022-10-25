/* It creates a class to use as a model for the API call. */
class performanceDataModel {
    constructor(userId, kind, data) {
        this.userId = userId;
        this.kind = kind;
        this.data = data;
    }
}

export default performanceDataModel;
