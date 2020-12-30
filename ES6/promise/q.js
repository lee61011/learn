// 这个模块是用来实现 promise，在 angular.js 里的 promise 就是用的 q
// let Q = require('q')
let Q = {  
  defer() {
    let success, error
    return {
      resolve(data) {
        success(data)
      },
      reject(err) {
        error(err)
      },
      promise: {
        then(onFulfilled, onRejected) {
          success = onFulfilled
          error = onRejected
        }
      }
    }
  }
}
let fs = require('fs')

function readFile(filename) {
  let defer = Q.defer()
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      defer.reject(err)
    } else {
      defer.resolve(data)
    }
  })
  return defer.promise  
}

readFile('1.txt').then(function(data){
  console.log(data)
})
