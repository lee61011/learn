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

// resolvePromise 所有的promise都要支持 bluebird q es6-promise
const resolvePromise = (promise2, x, resolve, reject) => {
  // 1. 循环引用 自己等待自己完成 错误的实现
  if(promise2 === x) { // 用一个类型错误 结束掉promise
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // # 后续的条件要严格判断 保证代码能和别的库一起使用
  let called
  if ((typeof x === 'object' && x != null) || typeof x === 'function') { // 有可能是一个promise
    // 要继续判断
    try {
      let then = x.then
      if (typeof then === 'function') { // 只能认为是一个promise了
        // 不要写成x.then 直接then.call就可以了 因为x.then会再次取值
        then.call(x, y => { // 根据promise的状态决定是成功还是失败
          if (called) return
          called = true
          // resolve(y)
          resolvePromise(promise2, y, resolve, reject) // 递归解析
        }, e => {
          if (called) return
          called = true
          reject(e)
        })
      } else { // 对象
        resolve(x)
      }
    } catch (e) { // 防止失败了再次进入成功
      if (called) return
      called = true
      reject(e) // 取值出错
    }
  } else {
    resolve(x)
  }
}

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
    let promise2 = new Promise((resolve, reject) => { // # 为了实现链式调用
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x =onFulfilled(this.value)
            // resolve(x)
            // x可能是一个promise
            resolvePromise(promise2, x, resolve, reject) // # 这里的promise2需要等new Promise执行完成后才能拿到结果 所以需要用setTimeout包起来 否则是undefined
          } catch (e) {
            reject(e) // # 外层的trycatch无法捕获异步方法错误 所以这里要用reject捕获错误状态
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          // todo ... 切片
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        })
      }
    })
    return promise2
  }
}

module.exports = Promise
