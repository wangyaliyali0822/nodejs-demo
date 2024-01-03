/* fs api:file system 文件系统，可以实现与硬盘的交互
*  例如：文件的创建、删除、重命名、移动。还有文件内容的写入、读取，以及文件夹的相关操作
*/

// ------------------------------------ 文件写入------------------------------------
// 需求 新建一个文件。座右铭.txt，写入内容：三人行
// fs的两种写入模式：同步与异步，同步写入：按照代码顺序执行

// 1. 导入fs模块：require是nodejs环境中的全局变量，用来导入模块；
const fs = require('fs');


// 2. 写入文件：writeFile/writeFileSync 语法fs.writeFile(file, data, options, callback) 参数：文件名/待写入的数据/选项设置(可选)/写入回调

// 代码：
      // fs.writeFileSync('./资料./座右铭.txt', '三人行，必有我师焉。', err => { // 异步写入
      //   if (err) {
      //     console.log('写入失败：', err);
      //     return
      //   }
      //   console.log('写入成功！');
      // })

// fs追加写入 appendFile/appendFileSync

// 代码：
      // fs.appendFile('./资料./座右铭.txt', '\n择其善者而从之，择期不善者而改之。', err => {
      //   if (err) {
      //     console.log('追加写入失败：',err);
      //     return
      //   }
      //   console.log('追加写入成功！');
      // })

// fs 流式写入：适用于大文件写入或者写入频繁的场景，会一直建立着和文件的链接，只要不断开，可以一直写入；
// 程序打开一个文件是需要耗费资源的，流式写入可以减少打开关闭文件的次数；

// 代码：

      // // 创建写入流对象
      // const ws = fs.createWriteStream('./资料./静夜思.txt');

      // ws.write('床前明月光\n')
      // ws.write('疑是地上霜\n')
      // ws.write('举头望明月\n')
      // ws.write('低头思故乡\n')

      // // 关闭通道
      // ws.close();

// ------------------------------------文件读取------------------------------------

// readFile/readFileSync 读出内容为buffer格式，通过toString()转为字符串；

// 代码：
      // fs.readFile('./资料./静夜思.txt', (err, data) => {
      //   if (err) {
      //     console('读取失败：',err)
      //     return;
      //   }
      //   console.log(data.toString());
      // })

// 流式读取：从文件中一块一块的读，每次读65536字节=64kb;流式读取可以提高读取的效率

// 代码：

      // // 1.创建读取流对象
      // const rs = fs.createReadStream('./资料/video.mp4');

      // // 2.绑定data事件
      // rs.on('data', chunk => {
      //   console.log(chunk.length);//每次读65536字节=64kb;
      //   // console.log(chunk);
      // })

      // // 3. end 可选事件
      // rs.on('end', () => {
      //   console.log('读取完成');
      // })

// fs：实现复制文件
// 字节/1024=kb/1024=MB

// 代码：

      const process = require('process'); // 引入进度模块

      // -------------------方式1（整体读写）-----
      // const rf = fs.readFileSync('./资料/video.mp4');
      // fs.writeFileSync('./资料/video-复制.mp4', rf);
      // console.log(process.memoryUsage()); // rss: 29491200/1024/1024 = MB

      // -------------------方式2（流式读写）：更节省运行内存----
      // // 1.创建读取流对象
      // const rs = fs.createReadStream('./资料/video.mp4');
      // // 2.创建写入流对象
      // const ws = fs.createWriteStream('./资料/video-流复制.mp4');

      // rs.on('data', chunk => {
      //   ws.write(chunk)
      // })

      // rs.on('end', () => {
      //   console.log('读取完毕');
      //   console.log(process.memoryUsage()); // rss: 29904896/1024/1024 = MB （文件太小看不出效果）
      // })
      // // 流文件复制简单写法
      // // rs.pipe(ws)


 

// ------------------------------------文件移动和重命名------------------------------------

// // rename/renameSync ('原文件路径', '新文件路径', callback) 更改文件的路径
// fs.rename('./资料/video-重新命名.map4', './资料/video-重新命名.mp4', err=>{
//   if (err) {
//     console.log('err---->', err);
//   }
// })

// ------------------------------------文件删除------------------------------------

// // 方法1 ：unlink方法/unlinkSync
// fs.unlink('./资料/video-重新命名.mp4', err => {
//   if (err) console.log(err);
// })

// // 方法2: 调用rm/rmSync方法 14.4版本引入
// fs.rm('./资料/video-2.mp4', err => {
//   if (err) console.log(err);
// })


// ------------------------------------文件夹操作------------------------------------


// 一：创建文件夹 mk:make; dir:directory 文件夹 mkdir('路径', optinos, callback)

    // 直接创建
    // fs.mkdir('./新文件夹', err => {
    //   if (err ) console.log(err);
    // })

    // 递归创建
    // fs.mkdir('./a/b/c', {recursive:true},  err => {
    //   if (err ) console.log(err);
    // })

// 二：读取文件夹：readdir(url, callback(err, data))

    // fs.readdir('./', (err, data) => {
    //   if (err) {
    //     console.log('err-->', err);
    //     return
    //   }
    //   console.log(data);
    // })

// 三：删除文件夹:rmdir(url, options, callback)
    // rmdir : 不建议使用
    // fs.rmdir('./新文件夹', err=> err ? console.log(err) : '')

    // rm :建议使用
    // 递归删除 recursive：文件夹下还包含其他文件，直接删除不了
    // fs.rm('./a', {recursive:true} ,err=> err ? console.log(err) : '')

// ------------------------------------fs查看资源状态------------------------------------

    // fs.stat('./资料/video.mp4', (err, data) =>{
    //   if (err) {
    //     return
    //   };
    //   console.log(data)
    //   console.log(data.isFile())
    //   console.log(data.isDirectory())
    // }) 

  // ------------------------------------fs路径------------------------------------

/*
* 相对路径：__dirname:可以理解为一个全局变量，保存的是：所在文件的所在目录的绝对路径
* 绝对路径bug：nodejs中相对路径的参照目录不是此文件所在目录，而是命令行的工作目录，不太稳定，随着命令行的工作目录切换而切换
*/

// console.log(__dirname);

// ------------------------------------fs练习-重命名------------------------------------

  // let files = fs.readdirSync('./资料');
  // files = files.filter(item => item[0] !== '.');
  // console.log(files);
  // files.forEach((oldFileName,index) => {
  //   let number = index + 1;
  //   if (number<10) {
  //     number = '0'+number
  //   }
  //   if (fs.statSync(`./资料/${oldFileName}`).isFile()) {
  //     fs.renameSync(`./资料/${oldFileName}`, `./资料/${number}-${oldFileName}`)
  //   }
  // });

// ------------------------------------path模块------------------------------------

const path = require('path')

/**
 * resolve：计算出一个格式正确的绝对路径 (重点，以下的了解即可)
 * sep: 获取路径的分隔符 不同系统下不同 window:\ linux: /
 * parse ：解析文件路径
 * basename: 获取路径部分的文件名
 * dirname: 获取路径部分（不含文件名部分）
 * extname:获取文件的扩展名
 */

// console.log(path.resolve(__dirname, 'fs模块.js'));
// console.log(path.sep); // '/'
// console.log(__dirname);
// console.log(__filename);

// let url = '/Users/wangyali/Desktop/nodejs学习/fs模块.js'
// console.log(path.parse(url)); 
// 打印结果：
    // {
    //   root: '/',
    //   dir: '/Users/wangyali/Desktop/nodejs学习',
    //   base: 'fs模块.js',
    //   ext: '.js',
    //   name: 'fs模块'
    // }

// console.log(path.basename(url)); // fs模块.js
// console.log(path.dirname(url)); // /Users/wangyali/Desktop/nodejs学习
// console.log(path.extname(url)); //.js
