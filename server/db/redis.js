var redis = require('redis')
var { REDIS_CONFIG } = require('../config/db.js')
var redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host)
redisClient.on('error', function (err) {
  console.log(err)
})
module.exports = redisClient