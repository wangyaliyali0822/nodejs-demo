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