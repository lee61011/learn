// promise就是一个类
// 1. promise有三个状态：成功态(resolve) 失败态(reject) 等待态(pending)
// 2. 用户自己决定失败的原因和成功的原因 成功和失败也是用户定义的
// 3. promise默认执行器是立即执行
// 4. promise的实例都拥有一个then方法，一个参数是成功的回调，另一个是失败的回调
// 5. 如果执行函数时发生了异常也会执行失败逻辑
// 6. 如果promise一旦成功就不能失败 返回来也是一样的

const RESOLVED = 'RESOLVED' // 成功
const REJECTED = 'REJECTED' // 失败
const PENDING = 'PENDING' // 等待态

class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined // 成功的原因
    this.reason = undefined //失败的原因
    this.onResolvedCallbacks = [] // 存放成功的回调
    this.onRejectedCallbacks = [] // 存放失败的回调
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = RESOLVED
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)  // 立即执行
    } catch (e) { // 错误处理 需要直接走错误逻辑
      console.log(e);
      reject(e)
    }
  }

  // 发布订阅模式 如果当前状态是pending时 我们需要将成功的回调和失败的回调存放起来 稍后调用resolve和reject的时候重新执行
  then(onFulfilled, onRejected) {
    if (this.status === RESOLVED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        // todo ... 切片
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

module.exports = Promise
