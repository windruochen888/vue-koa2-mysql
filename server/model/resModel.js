class BaseModel {
  constructor(rows, responseMsg) {
    if (typeof rows === 'string') {
      this.responseMsg = rows
      rows = null
      responseMsg = null
    }
    if (rows) {
      this.rows = rows
    }
    if (responseMsg) {
      this.responseMsg = responseMsg
    }
  }
}
class SuccessModel extends BaseModel {
  constructor(rows, responseMsg) {
    super(rows, responseMsg)
    this.responseCode = 0
  }
}
class ErrorModel extends BaseModel {
  constructor(rows, responseMsg) {
    super(rows, responseMsg)
    this.responseCode = -1
  }
}
module.exports = {
  SuccessModel,
  ErrorModel
}