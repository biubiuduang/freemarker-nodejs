const {promisify} = require('util');  // promise
const figlet = promisify(require('figlet')); //文字放大库
const clear = require('clear');  // 清屏
const chalk = require('chalk');  // 粉笔方法
const log = content => console.log(chalk.green(content));  //log函数 增加了 chalk装饰
// 引入 download
const {clone} = require('./download')
//promisify化spawn
//对接输出流
const spawn = async (...args) => {
  const {spawn} = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close',()=>{
      resolve()
    })
  })
}

module.exports = async name=>{
  //打印欢迎画面
  //清屏
  clear()
  const data = await figlet('Freemarker For NodeJS Welcome') //放大欢迎界面文字
  log(data)  //输出 欢迎界面

  log(`🚀🚀🚀🚀创建项目：${name}`)
  // 从github克隆项目到指定文件夹 对应git项目 https://github.com/woai3c/vue-admin-template
  await clone('github:biubiuduang/freemarker-nodejs',name);

  log('🚀🚀🚀🚀安装依赖');

  await spawn('npm',['install','i'], {cwd: `./${name}`});
  log(chalk.green(`
👌安装完成:
To get Start:
===========================
cd ${name}
    npm run devstart
===========================
    `))

  //启动项目
  await spawn('npm',['run','serve'],{cwd: `./${name}`})
}
