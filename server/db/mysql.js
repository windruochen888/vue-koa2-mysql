var mysql = require('mysql');
var { MYSQL_CONFIG } = require('../config/db')
var con = mysql.createConnection(MYSQL_CONFIG)
con.connect()
function exec (sql) {
    return new Promise(function (resolve, reject) {
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}
module.exports = exec