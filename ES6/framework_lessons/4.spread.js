// 深拷贝 和 浅拷贝

let o1 = {name: 'zs'}
let o2 = {age: {n: 12}}

let assign = {...o1, ...o2}
o2.age.n = 13
console.log(assign);


// 把对象上的每个属性 都拷贝一下  深拷贝 递归对象去拷贝   (也可以利用栈，不使用递归)
let obj = {name: {n: 'xxx'}}
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // ...
  if (typeof obj !== 'object') return obj

  if (hash.has(obj)) return hash.get(obj) // 返回上次拷贝的结果 不再递归了 防止拷贝循环引用导致爆栈
  // 剩下的都是对象类型 数组和对象
  const copy = new obj.constructor
  hash.set(obj, copy)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], hash)
    }
  }
  return copy
}
console.log(deepClone(obj));
