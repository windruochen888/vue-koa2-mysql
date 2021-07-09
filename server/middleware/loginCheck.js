var { ErrorModel } = require('../model/resModel')

async function loginCheck (ctx, next) {
  if (ctx.session.username) {
    await next()
  } else {
    ctx.body = new ErrorModel("尚未登录")
  }

}
module.exports = loginCheck