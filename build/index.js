/*
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-09-20 21:43:30
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-09-21 15:14:07
 */
// run功能的实现也是因为导入了一个包
// 解构 （Destructuring）
// const {readFile, writeFile} = require('fs') //readFile和writeFile可以直接使用
const { run } = require('runjs') //也就是run可以直接使用，这个库用于可以直接在线调节
const chalk = require('chalk')
const config = require('../vue.config.js')
// 得到npm命令行里的参数(字符串数组)，从第三个开始(可以有4，5，6)
const rawArgv = process.argv.slice(2)
// 拼接数组并返回字符串
const args = rawArgv.join(' ')
// 检查npm 输入参数为preview时，是否包含report
if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')

  run(`vue-cli-service build ${args}`)

  const port = 9526
  const publicPath = config.publicPath

  var connect = require('connect')
  var serveStatic = require('serve-static')
  const app = connect()
// 更改服务端路径，以及首页，指向dist目录下的index.html
  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )
// 监听端口
  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }

  })
} else {
  run(`vue-cli-service build ${args}`)
}
