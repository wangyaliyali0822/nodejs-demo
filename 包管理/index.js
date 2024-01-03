const uniq = require('uniq');

// 需要在package.json中设置 "type": "module" 
// import uniq from 'uniq'; 

const arr = [1,2,3,4,5,1,2,3,4];

const result = uniq(arr);

console.log(result);