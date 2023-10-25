// reduce 收敛函数  可以把一个数组转化成其他格式

Array.prototype.reduce = function(callback, prev) {
  for(let i = 0; i < this.length; i++) {
    if (!prev) {
      prev = callback(this[i], this[i+1], i+1, this)
      i++
    } else {
      prev = callback(prev, this[i], i, this)
    }
  }

  return prev
}

// reduce方法使用的前提必须是 数组不能为空，如果只有一个值则返回当前值
let r = ([1,2,3,4]).reduce(function(previousValue, currentValue, index, arrary) {
  return previousValue + currentValue
}, 5)
// 返回值是上一次的 + 当前的值 
console.log(r);



// compose:   reduce 实现compose 组合函数
function sum(a, b) {
  return a + b
}
function len(str) {
  return str.length
}
function addPrefix(str) {
  return '$' + str
}
// let r = addPrefix(len(sum('a', 'b')))
// console.log(r);

/**
 * * 版本一：reduceRight
 */
// const compose = (...fns) => {
//   return function(...args) {
//     let lastFn = fns.pop()
//     let r = lastFn(...args)
//     return fns.reduceRight((prev, current) => { // [addPrefix, len]
//       return current(prev)
//     }, r)
//   }
// }

// 简写优化
// const compose = (...fns) => (...args) => {
//   let lastFn = fns.pop()
//   return fns.reduceRight((prev, current) => current(prev), lastFn(...args))
// }


/**
 * * 版本二：reduce
 */
// const compose = (...fns) => {
//   return fns.reduce(function(a, b) {
//     return function(...args) {
//       return a(b(...args))
//     }
//   })
// }
const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))
let final = compose(addPrefix, len, sum)
console.log(final('a', 'b'));



// reduce 可以做收敛函数 最终转化成一个结果
 