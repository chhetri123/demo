class ReqDataProvider {
  constructor(requestedData) {
    console.log(requestedData);
    this.name = requestedData.name;
    this.description = requestedData.description;
    this.completed = requestedData.completed;
  }
}

module.exports = ReqDataProvider;
