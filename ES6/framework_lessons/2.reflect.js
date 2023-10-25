// ES6 后续新增的方法都放在 Reflect上 => Object

let s1 = Symbol('zs')
let obj = {
  name: 'zs',
  age: 12,
  [s1]: 'ok'
}
Reflect.ownKeys(obj).forEach(item => { // 获取所有的key属性
  console.log(item);
})


// defineProperty -> Reflect
// Reflect.get    Reflect.set   Reflect.delete


const fn = (a, b) => {
  console.log('fn', a, b);
}
fn.apply = function () {
  console.log('apply');
}
// 调用函数本身的apply方法如何调用？
// fn.apply()
//  call的功能是让apply方法中的this指向fn，并让apply方法执行  fn.apply(null, [1,2])
//  call的作用：1.让函数执行 让apply执行  2.改变apply中的this执行fn
Function.prototype.apply.call(fn, null, [1,2])

Reflect.apply(fn, null, [1, 2])

