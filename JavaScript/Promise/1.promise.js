// promise 的特点及概念

// promise 为什么会产生 解决异步问题

// 1. 多个异步请求并发 (希望同步最终的结果) Promise.all
// 2. 链式异步请求的问题 上一个人的输出是下一个人的输入 Promise的链式调用可以解决这个问题
// 3. 缺陷：还是基于回调的


// 1. promise有三个状态：成功态(resolve) 失败态(reject) 等待态(pending)
// promise就是一个类

let Promise = require('./promise')
let promise = new Promise((resolve, reject) => {
  throw new Error('失败了')
  resolve('成功')
  reject('失败')
})
promise.then((data) => {
  console.log('success', data);
}, (err) => {
  console.log('faild', err);
})
promise.then((data) => {
  console.log('success1', data);
}, (err) => {
  console.log('faild1', err);
})
