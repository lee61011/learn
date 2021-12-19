// promise 的特点及概念

// promise 为什么会产生 解决异步问题

// 1. 多个异步请求并发 (希望同步最终的结果) Promise.all
// 2. 链式异步请求的问题 上一个人的输出是下一个人的输入 Promise的链式调用可以解决这个问题
// 3. 缺陷：还是基于回调的


// 1. promise有三个状态：成功态(resolve) 失败态(reject) 等待态(pending)
// promise就是一个类

// let Promise = require('./promise')
// let promise = new Promise((resolve, reject) => {
//   throw new Error('失败了')
//   resolve('成功')
//   reject('失败')
// })
// promise.then((data) => {
//   console.log('success', data);
// }, (err) => {
//   console.log('faild', err);
// })
// promise.then((data) => {
//   console.log('success1', data);
// }, (err) => {
//   console.log('faild1', err);
// })


let fs = require('fs')

function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}
// 1. promise 成功和失败的回调的返回值 可以传递到外层的下一个then
// # 2. 如果返回的是普通值的话(传递到下一次的成功中)，出错的情况(一定会走下一次的失败)，可能还有promise的情况(会采用promise的状态，决定走下一次的成功还是失败)
// 3. 错误处理 如果离自己最近的then 没有错误处理 会向下找
read('./name.txt').then((data) => {
  console.log(data);
  return 100
}, (err) => {
  console.log(err);
  throw err
}).then((data) => {
  console.log('---------- ', data);
}, err => {
  console.log('---------- ', err);
})

// # error first 错误第一   异步方法无法通过try、catch捕获异常
// fs.readFile('./name.txt', 'utf8', (err, data) => {
//   fs.readFile(data, 'utf8', (err, data) => {
//     console.log(data);
//   })
// })
