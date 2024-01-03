/**
 * 导入模块建议使用相对路径，且不能省略./或者../，require模块不会受到工作路径的影响
 * js和json文件可以省略后缀
 * 导入文件夹：会首先检测该文件夹下package.json文件中main属性对应的文件，如果存在则导入，如果不存在会报错；如果main属性不存在，或者package.json不存在，则会尝试导入文件夹下的index.js或index.json，如果还是没找到就报错；
 */

const {getName} = require('./me');

getName()