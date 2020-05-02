// 引入模块
const mongoose = require('mongoose');

// 创建用户信息框架
const customerScheam = mongoose.Schema({
    firstname:{type: String},
    lastname:{type: String},
    phone:{type: String},
    email:{type: String}
})

// 输出模块
module.exports = mongoose.model('Customer', customerScheam);