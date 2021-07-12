var env = process.env.NODE_ENV//环境参数
var MYSQL_CONFIG
var REDIS_CONFIG
if (env === 'dev') {
    MYSQL_CONFIG = {
        host: '127.0.0.1',
        user: 'root',
        password: '1111',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1'
    }
} else if (env === 'production') {
    MYSQL_CONFIG = {
        host: '127.0.0.1',
        user: 'root',
        password: '1111',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1'
    }
}
module.exports = { MYSQL_CONFIG, REDIS_CONFIG }