// 数据类型 (去重)  set map -> weakMap  weakSet


// 使用 区别

let set = new Set([1,2,1,2,1,2,1,21,2,12,12,21,21])
set.add(5)
set.entries(set)


let map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['c', 4],
])
map.set({a: 1}, 5)  // key可以使用对象类型
console.log(map);

// 数组 交集  并集  差集
let arr1 = [1,2,3,4]
let arr2 = [3,4,5,6]

console.log(Object.prototype.toString.call(new Map()));
console.log(Object.prototype.toString.call(new Set()));

// # 并集
function union(arr1, arr2) {
  // 内部有symbol.Iterator方法
  let s = new Set([...arr1, ...arr2]) // 集合 集合可以被迭代
  return [...s]
}
console.log(union(arr1, arr2));

// # 交集
function intersection(arr1, arr2) {
  let s1 = new Set(arr1)
  let s2 = new Set(arr2)

  return [...s1].filter(item => {
    return s2.has(item)
  })
}
console.log(intersection(arr1, arr2));

// # 差集
// 得看谁减少谁 1 - 2     2 - 1
function difference(arr1, arr2) {
  const s1 = new Set(arr1)
  const s2 = new Set(arr2)

  return [...s1].filter(item => {
    return !s2.has(item)
  })
}
console.log(difference(arr1, arr2));




/**
 * * weakMap  弱引用 垃圾回收 '标记引用'
 */
class myTest {}
let my = new myTest() // 对象
// let map1 = new Map()
// map.set(my, 1)
// my = null
//  当给一个变量设置为null的时候，不会马上回收，会在何时的机会自己清空
//  map 引用的对象 不会被回收掉 weakMap引用的对象被置为null时 后续会被清空
let map1 = new WeakMap()
map1.set(my, 1)
my = null



