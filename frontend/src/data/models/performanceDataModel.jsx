/**
 * It creates a class to use as a model for the API call.
 */
class PerformanceDataModel {
    /**
     *
     * @param {number} userId The user id
     * @param {Object} kind An object containing the names of the kinds (string)
     * @param {Array} data An array containing value (number) and kind (number)
     */
    constructor(userId, kind, data) {
        this.userId = userId;
        this.kind = kind;
        this.data = data;
    }
}

export default PerformanceDataModel;
