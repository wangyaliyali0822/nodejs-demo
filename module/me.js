/**
 * module.exports:可以报漏任意【字符串，对象, 方法...】数据
 * exports:exports === module.exports === {}
 * 始终暴露的都是module.exports，而不是exports，所以直接给exports赋值是没有用的
*/

const getName = function() {
  console.log('王雅丽');
}

// module.exports = {
//   getName
// };

exports.getName = getName;