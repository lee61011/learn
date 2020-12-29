const PENDING = 'pending' // 初始态
const FULFILLED = 'fulfilled' // 成功态
const REJECTED = 'rejected' // 失败态

function Promise(executor) {
    let self = this // 缓存当前promise实例
    self = status = PENDING
    self.onResolvedCallbacks = [] // 定义存放成功的回调的数组
    self.onRejectedCallbacks = [] // 定义存放失败的回调的数组
    // 当调用此方法的时候，如果promise状态为pending，则可以转成成功态，如果已经是成功态或者失败态了，则什么都不做
    function resolve(value) {
      if (value instanceof Promise) {
          return value.then(resolve, reject)
      }
      setTimeout(function() {
        if (self.status === PENDING) {
          self.status = FULFILLED
          self.value = value // 成功后会得到一个值，这个值不能改
          // 调用所有成功的回调
          self.onResolvedCallbacks.forEach(cb => cb(self.value))
        }
      })
    }
    function reject(reason) {
      setTimeout(function() {
        if (self.status === PENDING) {
          self.status = REJECTED
          self.value = reason
          self.onRejectedCallbacks.forEach(cb => cb(self.value))
        }
      })
    }
    
    try {
      executor(resolve, reject) // 因为此函数执行可能会异常，所以需要捕获，如果出错了，需要用错误对象reject
    } catch(e) {
      reject(e) // 如果函数执行失败了，则用失败的原因reject这个promise
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promsie2 === x) {
        return reject(new TypeError('循环引用'))
    }
    let called = false // promise2 是否已经resolve或者reject了
    if (x instanceof Promise) {
      if (x.status === PENDING) {
        x.then(function(y) {
            resolvePromise(promise2, y, resolve, reject)
        }, reject)
      } else {
          x.then(resolve, reject)
      }
    } else if (x !== null && ((typeof x === 'object') || (typeof x === 'function'))) {
        // x是一个thenable对象或函数，只要有then方法的对象
        // 当我们的promise和别人的promise进行交互，编写这段代码的时候尽量的考虑兼容性，允许别人瞎写
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, function(y) {
                    // 如果promise2已经成功或者失败了，则不会再处理了
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject) // 递归调用
                }, function(err) {
                    if(called) return
                    called = true
                    reject(err)
                })
            } else {
                // 到此的话x不是一个thenable对象，那直接把它当成值resolve promise2就可以了
                resolve(x)
            }
        } catch(e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        // 如果x是一个普通的值，则用x的值去resolve promise2
        resolve(x)
    }
}

// onFulfilled 是用来接收promise成功的值或者失败的原因
Promise.prototype.then = function(onFulfilled, onRejected) {
    // 如果没有传成功或失败的回调，则表示这个then没有任何逻辑，只会把值往后抛
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
    
    let self = this
    let promise2
    if (self.status === FULFILLED) {
        return promise2 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    let x = onFulfilled(this.value)
                    // 如果获取到了返回值x，会走解析promise的过程
                    resolvePromise(promise2, x, resolve, reject)
                } catch(e) {
                    // 如果执行成功的回调过程中出错了，用错误原因把promise2 reject
                    reject(e)
                }
            })
        })
    }
    if (self.status === REJECTED) {
        return promise2 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    let x = onRejected(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch(e) {
                    reject(e)
                }
            })
        })
    }
    if (self.status === PENDING) {
        return promise2 = new Promise(function(resolve, reject) {
            self.onResolvedCallbacks.push(function() {
              try {
                let x = onFulfilled(self.value)
                resolvePromise(promise2, x, resolve, reject)
              } catch(e) {
                reject(e)
              }
            })
            self.onRejectedCallbacks.push(function() {
              try {
                let x = onRejected(self.value)
                resolvePromise(promise2, x, resolve, reject)
              } catch(e) {
                reject(e)
              }
            })
        })
    }
}

function gen(times, cb) {
    let result = []
    let count = 0
    return function(i, data) {
        result[i] = data
        if (++count === times) {
            cb(result)
        }
    }
}
Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
        // let result = []
        // let count = 0
        // function done(i, data) {
        //     result[i] = data
        //     if (++count === promises.length) {
        //         resolve(result)
        //     }
        // }
        let done = gen(promises.length, resolve)
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function(data) {
                done(i, data)
            }, reject)
        }
    })
}
Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}
// catch 的原理就是只传失败的回调
Promise.prototype.catch = function(onRejected) {
    this.then(null, onRejected)
}
Promise.deferred = Promise.defer = function() {
    let defer = {}
    defer.promise = new Promise(function(resolve, reject) {
        defer.resolve = resolve
        defer.reject = reject
    })
    return defer
}

module.exports = Promise