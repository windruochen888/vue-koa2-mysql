const router = require('koa-router')()
router.prefix('/api')
var exec = require('../db/mysql');
var { SuccessModel, ErrorModel } = require('../model/resModel')
/* GET users listing. */
function getCookieExpires () {
  var d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}
router.post('/login', async function (ctx, next) {//查询
  var { username, password } = ctx.request.body
  var sql = `select username,password from users where  username = '${username}'  and password = '${password}'`
  await exec(sql).then(function (result) {
    if (!result[0]) {
      ctx.body = new ErrorModel("失败")
    } else {
      ctx.session.username = result[0].username
      // res.setHeader('set-Cookie', `username=${result[0].username};path =/;httpOnly;expires=${getCookieExpires()}`)//httpOnly:客户端不能修改 expires：过期时间 
      ctx.body = new SuccessModel("成功")
    }
  })
});

module.exports = router;