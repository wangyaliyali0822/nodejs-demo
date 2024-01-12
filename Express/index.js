const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/home/:id', (req, response) => {

  // 原声操作
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  // express操作
  // console.log(req.path);
  // console.log(req.query);
  console.log(req.ip);
  // console.log(req.get('host'));

  console.log(req.params.id);
  response.end(`hello express! id=${req.params.id}`)
})

// 匹配所有的方法
app.all('/test', (req, response) => {
  response.end('不限制请求方法，只要路径匹配即可!')
})

// 404响应 以上路由都没匹配到的响应
app.all('*', (req, response) => {
  response.end('404 not Found')
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动，端口 3000 正在监听中...');
})