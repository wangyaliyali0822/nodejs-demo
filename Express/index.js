const express = require('express');
const fs = require('fs')
const path = require('path')

// 创建应用对象
const app = express();

/**
 * 全局中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const recoreMiddleWare = (req, res, next) => {
  const {ip,url} = req;
  // let  pid = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  fs.appendFileSync(path.resolve(__dirname, './recore.log'), `${url} ${ip} \n`)
  next();
}
app.use(recoreMiddleWare)

/**
 * 路由中间件
 */
const checkCodeMilldeWare = (req, res, next) => {
  console.log(req.query);
  if (req.query.code === '520') {
    next()
  } else {
    res.set('content-type', 'text/html;charset=utf-8')
    res.end('暗号不对！')
  }
}

/**
 * express内置中间件:
 * 1.静态资源中间件设置
 * 路由响应动态资源，静态资源由静态资源中间件响应
 */
app.use(express.static(__dirname+'/page'))

/**
 * dataPar
 */

// 创建路由
app.get('/home/:id', checkCodeMilldeWare, (req, response) => {

  // 原声操作
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  // express操作
  // console.log(req.path);
  // console.log(req.query);
  // console.log(req.ip);
  // console.log(req.get('host'));

  // console.log(req.params.id);
  // response.end(`hello express! id=${req.params.id}`)

  // 跳转响应，重定向
  // response.redirect('http://www.baidu.com')

  // 下载响应
  // response.download(__dirname+'/package.json')

  // json响应
  // response.json({
  //   name:'鸭梨',
  //   slogon:'心态最重要！！！'
  // })

  // 响应文件内容
  response.sendFile(__dirname+`/page/index.html`)
})

// 匹配所有的方法
app.all('/test', checkCodeMilldeWare, (req, response) => {
  response.set('content-type', 'text/html;charset=utf-8')
  response.end('不限制请求方法，只要路径匹配即可!')
})

// 404响应 以上路由都没匹配到的响应
app.all('*', (req, response) => {
  response.end('404 not Found')
})

// 监听端口，启动服务
app.listen(4000, () => {
  console.log('服务已经启动，端口 4000 正在监听中...');
})