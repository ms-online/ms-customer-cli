#!/usr/bin/env node
// 引入模块
const program = require('commander');
const {
    addCustomer,
    findCustomer,
    removeCustomer,
    updateCustomer,
    listCustomer
} = require('./index');
const {prompt} = require('inquirer');

// 创建询问列表
const questions = [
    {
        type:'input',
        name:'firstname',
        message:'Customer First Name'
    },
    {
        type:'input',
        name:'lasttname',
        message:'Customer Last Name'
    },
    {
        type:'input',
        name:'phone',
        message:'Customer Phone Number'
    },
    {
        type:'input',
        name:'email',
        message:'Customer Email Address'
    }
]

// 配置版本和描述信息
program.version('1.0.0').description('自定义命令行界面')

// 添加用户命令
// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('添加新用户')
//     .action((firstname,lastname,phone,email) => {
//         addCustomer({firstname,lastname,phone,email});
//     })

 program
    .command('add')
    .alias('a')
    .description('添加新用户')
    .action(() => {
       prompt(questions).then(answers => addCustomer(answers)); 
    })

// 查找用户命令
program
    .command('find <name>')
    .alias('f')
    .description('查找用户')
    .action(name => findCustomer(name));


// 删除用户命令
program
    .command('remove <_id>')
    .alias('r')
    .description('删除用户')
    .action(_id => removeCustomer(_id));


// 更新用户命令
program
    .command('update <_id>')
    .alias('u')
    .description('更新用户')
    .action(_id => {
        prompt(questions).then(answers => updateCustomer(_id,answers)); 
     })


// 用户列表命令
program
    .command('list')
    .alias('l')
    .description('所有用户')
    .action(() => listCustomer());
    
// 测试命令
program.parse(process.argv);