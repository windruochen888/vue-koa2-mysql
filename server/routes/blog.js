const router = require('koa-router')()
router.prefix('/api')
const exec = require('../db/mysql');
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
/* GET users listing. */
function getCookieExpires () {
    var d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}

router.get('/list', loginCheck, async function (ctx, next) {//查询
    var sql = `select * from blog where 1=1`
    var title = ctx.query.title || ''
    var content = ctx.query.content || ''
    if (title) {
        sql += `  and title like '%${title}%'`
    }
    if (content) {
        sql += `  and content like '%${content}%'`
    }
    sql += `;`
    await exec(sql).then(function (result) {
        if (result) {
            ctx.body = new SuccessModel(result, "成功")
        } else {
            ctx.body = new ErrorModel("失败")
        }

    })
});

router.get('/detail', loginCheck, async function (ctx, next) {//详情
    var sql = `select * from blog where 1=1`
    var id = ctx.query.id || ''
    if (id) {
        sql += `  and id='${id}'`
    }
    sql += `;`
    await exec(sql).then(function (result) {
        if (result) {
            ctx.body = new SuccessModel(result[0], "成功")
        } else {
            ctx.body = new ErrorModel("失败")
        }
    })
});

router.post('/add', loginCheck, async function (ctx, next) {//新增
    var { title, content } = ctx.request.body
    var sql = `insert into blog (title,content) values('${title}','${content}');`
    await exec(sql).then(function (result) {
        if (result) {
            ctx.body = new SuccessModel("成功")
        } else {
            ctx.body = new ErrorModel("失败")
        }
    })
});

router.post('/update', loginCheck, async function (ctx, next) {//修改
    var { id, title, content } = ctx.request.body
    var sql = `update blog set title='${title}' , content='${content}' where id='${id}';`
    await exec(sql).then(function (result) {
        if (result) {
            ctx.body = new SuccessModel("成功")
        } else {
            ctx.body = new ErrorModel("失败")
        }
    })
});

router.post('/delete', loginCheck, async function (ctx, next) {//删除
    var { id } = ctx.request.body
    var sql = `delete from blog where id='${id}';`
    await exec(sql).then(function (result) {
        if (result) {
            ctx.body = new SuccessModel("成功")
        } else {
            ctx.body = new ErrorModel("失败")
        }
    })
});
module.exports = router;
