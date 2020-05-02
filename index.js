// 引入模块
const mongoose = require('mongoose');

// 连接数据库
const db = mongoose.connect('mongodb+srv://test:test1234@cluster0-menjs.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 引入model
const Customer = require('./models/customer');

// 添加用户
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('新用户已经添加...');
        mongoose.connection.close();
    })
    
}

// 查找用户
const findCustomer = (name) => {
    // 不区分大小写
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname:search}, {lastname:search}]}).then(customer => {
        console.info(customer);
        console.info(`${customer.length} 个匹配`);
        mongoose.connection.close();
    })
}

// 更新用户
const updateCustomer = (_id, customer) => {
    Customer.update({_id},customer).then(customer => {
        console.info('用户信息已更新...');
        mongoose.connection.close();
    })
}

// 删除用户
const removeCustomer = (_id) => {
    Customer.remove({_id}).then(customer => {
        console.info('用户已删除...');
        mongoose.connection.close();
    })
}

// 获取用户列表
const listCustomer = () => {
    Customer.find().then(customer => {
        console.info(customer);
        console.info(`${customer.length} 个用户`);
        mongoose.connection.close();
    })
}

// 输出方法
module.exports = {
    addCustomer,
    findCustomer,
    removeCustomer,
    updateCustomer,
    listCustomer
}