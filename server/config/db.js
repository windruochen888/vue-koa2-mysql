var env = process.env.NODE_ENV//环境参数
var MYSQL_CONFIG
var REDIS_CONFIG
if (env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: '1111',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: 'localhost'
    }
} else if (env === 'prd') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: '1111',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: 'localhost'
    }
}
module.exports = { MYSQL_CONFIG, REDIS_CONFIG }