// 引入模块
const program = require('commander');
const {
    addCustomer,
    findCustomer
} = require('./index');

// 配置版本和描述信息
program.version('1.0.0').description('自定义命令行界面')

// 添加用户命令
program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('添加新用户')
    .action((firstname,lastname,phone,email) => {
        addCustomer({firstname,lastname,phone,email});
    })

// 查找用户命令
program
    .command('find <name>')
    .alias('f')
    .description('查找用户')
    .action(name => findCustomer(name));


// 测试命令
program.parse(process.argv);