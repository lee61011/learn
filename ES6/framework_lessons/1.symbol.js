// Symbol 基本数据类型 string number boolean undefined null symbol bigint


let s1 = Symbol('zs')
let s2 = Symbol('zs')
// console.log(s1 === s2); // false

// 作为对象key来使用
let obj = {
  name: 'zs',
  age: 12,
  [s1]: 'ok'
}
// console.log(obj);

for (let key in obj) { // Symbol 属性默认是不能枚举的
  console.log(obj[key]);
}

console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.keys(obj)); // 获取普通类型的key



let s3 = Symbol.for('ls') // 声明全新的
let s4 = Symbol.for('ls') // 把之前声明的拿过来用
console.log(s3 === s4); // true


// 元编程能力，可以改写语法本身
//  判断类型时  Object.prototype.toString()
let obj1 = {
  [Symbol.toStringTag]: 'zhangsan'
}
console.log(Object.prototype.toString.call(obj1)); // [object zhangsan]



// 隐式类型转化
// let obj2 = {}
// console.log(obj2 + 1); // [object Object]1

let obj2 = {
  [Symbol.toPrimitive](type) {
    console.log(type);
    // return '123'
  }
}
console.log(obj2 + 1);  // NaN
console.log(obj2 + '1');  // undefined1




Symbol.toStringTag
Symbol.toPrimitive
Symbol.iterator
