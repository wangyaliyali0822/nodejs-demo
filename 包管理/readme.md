## 初始化的过程中的注意事项

- 包名 name ：不能使用中文，大写；默认值是文件夹名称；（所以文件夹名称不能包含大写字母和数字）
- 使用 npm init 创建package文件 npm init -y 快速创建；
- main：包的入口文件

> require导入包的过程：
- 是先找当前文件夹下有没有node_modules，如果没有会继续往外层文件夹下找

> -S\-D：开发依赖、生产依赖
- -S : --save 保存在dependencies
- -D : --save-dev 保存在devDependencies中

> 全局安装 ： npm i -g nodemon 全局安装nodemon，nodemon可以代替node启动我们的服务，监听我们服务内容的更改，一旦更改就重启服务
- 局部安装：1.在文件中导入后使用；2.安装在文件夹内
- 全局安装：1.使用命令使用； 2.安装位置：npm root -g 获取全局安装包的位置

> 环境变量 path
- .exe .cmd :可执行文件
- 打开环境变量编辑文件命令：open ~/.bash_profile
- .bash_profile文件是一个隐藏文件，它位于用户根目录下。如果该文件不存在，则可以自行创建该文件。在这个文件中设置的环境变量可以永久生效，即使关闭终端后再次打开也不会失效。可以使用以下命令打开该文件进行编辑；
- 显示隐藏文件 shift+command+.

> 删除包命令: npm r jquery
> 删除全局包命令： npm r -g nodemon

> 配置命令别名- 在package.json scripts属性下配置：
- npm run 有向上寻找的功能，比如在子文件目录下也可以运行
- start命名：不用加run， 直接 npm start 
- 其他命名：需要加run运行，npm run xxs

> npm 配置淘宝镜像(只读) https://registry.npmmirror.com
- npm i -g nrm
- nrm use taobao
- 查看所有: nrm ls
- 切回官方：nrm use npm
- 查看当前npm指向的地址：npm config list

> yarn
- npm i -g yarn
- yarn add xx
- yarn remove xx
- yarn config list
- npm 和 yarn 的选择：不能混着用，用哪个就是哪个

> 包发布：
- npm官方网址创建一个账户 https://www.npmjs.com/
- npm的镜像地址改为官方地址
- npm login：输入用户名，密码，邮箱，验证码
```js
// 账号：yali0822
// 密码：wylafm19940822
// 邮箱：18267162566@163.com
```
- npm publish 提交包
- 包更新：1. 改代码，2. 测试内容，3. 更改版本号，4.npm publish
- 包删除：npm unpublish --force