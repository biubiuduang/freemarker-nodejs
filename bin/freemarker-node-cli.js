#!/usr/bin/env node
/**⬆ 指明当前脚本文件的解释程序 */

//定制命令行界面
// console.log('cli.....'); // whb-lg
const program = require('commander'); //定制命令界面
program.version(require("../package").version);

program
    .command('init <name>')
    .description('init project')
    // .action(name=>{
    //  console.log('init' + name)
    // })
    .action(require("../lib/init"));  //执行初始化
program.parse(process.argv)
