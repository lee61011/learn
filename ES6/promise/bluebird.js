/*
 * bluebird 是比较快的 promise 库
 *   它能把任意的通过回调函数实现的异步 API 换成 promise API
*/
// let Promise = require('bluebird')
// let readFile = require('fs').readFile

// // 会返回一个新的函数
// let readFileSync = Promise.promisify(readFile)
// readFileSync('./1.txt', 'utf8').then(function(data) {
//   console.log(data)
// })



/*********************** 简易实现 ***********************/
let Promise = require('bluebird')
let readFile = require('fs').readFile
// 可以把一个普通的异步方法转成返回 promise 的方法
function promisify(fn) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      fn.apply(null, [...args, function(err, data) {
        err ? reject(err) : resolve(data)
      }])
    })
  }
}

// 会返回一个新的函数
let readFileSync = promisify(readFile)
readFileSync('./1.txt', 'utf8').then(function(data) {
  console.log(data)
})


// bluebird 最常用的两个方法：promisify 和 promisifyAll
