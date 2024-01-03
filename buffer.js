// -------------------创建一个10字节的BUFFER----------------;

// 1. alloc

// let buf = Buffer.alloc(10);
// console.log(buf);

// 2. allocUnsafe

// 3. from 将 字符串或者数组转为buffer;
// let buf3 = Buffer.from('hello'); // 转为uncode表中对应的字符
// console.log(buf3);

// ---------------------buffer与字符串的转换----------------------

// let buf4 = Buffer.from([105,108,111,118,101,121,111,117]);
// console.log(buf4, buf4.toString());

// 一个uff-8的中文字符 汉字占3个字节
// let buf5 = Buffer.from('王雅丽');
// buf5[0]=33 //  33=！，写入buffer
// console.log(buf5[0]); // 十进制 231
// 小知识1：十进制转16进制：231/16 = 14 余 7 =》 14/16 = 0 余14 
// 所以转为16进制为：14=e 7 => e7

// console.log(buf5[0].toString(2)); // 二进制 1110 0111

// 小知识2:二进制转16进制：1111从高到低为8，4，2，1
// 1110 = 8+4+2+0 = 14 ; 0111 = 0+4+2+1 = 7 
// 所以转为16进制为：14=e 7 => e7

// console.log(buf5[0].toString(16)); // 十六进制 e7

// console.log(buf5);

