class SuccessModel {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}

class ErrorModel {
  constructor(status, errMsg) {
    this.status = status;
    this.errMsg = errMsg;
  }
}

module.exports = {
  ErrorModel,
  SuccessModel,
};
