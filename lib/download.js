const {promisify} = require('util')
module.exports.clone = async (repo,desc)=>{
  const download = promisify(require('download-git-repo')) //异步下载git协议
  const ora = require('ora') // 下载进度提示
  const process = ora(`下载......${repo}`)
  process.start() //进程启动
  await download(repo,desc) //异步下载
  process.succeed()  //进程完成 ✅
}
