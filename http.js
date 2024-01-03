/**
 * http模块
 */

const http = require('http');
// const url = require('url');
const fs = require('fs');
const path = require('path')

// 创建服务对象
// request:对请求报文的封装对象；response：对响应报文的封装对象
const server = http.createServer((request, response) => {

  // response.setHeader('content-type', 'text/html;charset=utf-8')

  // 当服务接收到http请求时执行

  // 获取请求的一些信息
  // console.log(request.method);
  // console.log(request.url); // 只包含url中的路径和查询字符串
  // console.log(request.httpVersion); // http协议版本号
  // console.log(request.headers); // 请求头对象

  // 方式一：提取url中的路径和将查询字符串转为对象格式
  // const urlData = url.parse(request.url, true);
  // const {
  //   pathname,
  //   query : {
  //     id
  //   }
  // } = urlData;
  // console.log(pathname, id );
  // 方式二：
  let {pathname, searchParams } = new URL(request.url, 'http://127.0.0.1');
  // console.log(pathname, searchParams.get('id'));

  if (pathname==='/') {
    pathname = '/index.html'
  } 

  const root = __dirname + '/page';

  const filePath = root + pathname;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.setHeader('content-type', 'text/html;charset=utf-8')
      response.end('文件读取失败～～');
      return
    }

    // 网页显示乱码：解决方式2个：1，html中设置meat标签；2，设置响应头(优先级更高)
    // response.setHeader('content-type', '')
    response.end(data);
  })
  
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
})