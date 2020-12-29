let p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(100)
  }, 1000);
})
let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(200)
  }, 2000);
})

// Promise.all 会接收到一个promise数组，如果promise全部完成了这个promise才会成功，如果有一个失败，那么这个promise就整个失败了
// Promise.race 会接收一个promise数组，只要有一个成功了，则就成功了；只要有一个失败，则就失败了
console.time('cost')
Promise.all([p1, p2]).then(function(data) {
  console.log('Promise.all ------ ', data)
  console.timeEnd('cost')
})

console.time('race')
Promise.race([p1, p2]).then(function(data) {
  console.log('Promise.race ------- ', data)
  console.timeEnd('race')
})