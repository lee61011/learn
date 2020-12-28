/* 
  基本用法
*/
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}

// console.log(asyncPrint('hello world', 1000).then(res => console.log(res)))
asyncPrint('hello world ----- ', 100)




/*
  语法
*/

/* 返回 Promise 对象 */
// async 函数返回一个 Promise 对象
// async 函数内部抛出错误，会导致返回的 Promise 对象变为 reject 状态。抛出的错误对象会被 catch 方法回调函数接收到
async function f() {
  // return 'hello world'
  throw new Error('出错了')
}
f().then(
  res => console.log(res),
  rej => console.log(rej)
)

/* Promise 对象的状态变化 */
// async 函数返回的 Promise 对象，必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到 return 语句或者抛出错与
// 也就是说，只有 async 函数内部的异步操作执行完，才会执行 then 方法执行的回调函数
async function getTitle(url) {
  let response = await fetch(url)
  let html = await response.text()
  return html.match(/<title>(\s\S)+<\/title>/i)[1];
}
// getTitle('https://tc39.github.io/ecma262/').then(console.log)

/* await 命令 */
// 正常情况下，await 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值
async function f1() {
  // let abc = 123
  // return abc
  return await 123
}
f1().then(v => console.log(v))
// 另一种情况是， await 命令后面是一个 thenable 对象(即定义then方法的对象)，那么 await 会将其等同于 Promise 对象
class Sleep {
  constructor(timeout) {
    this.timeout = timeout
  }
  then(resolve, reject) {
    const startTime = Date.now()
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    )
  }
}
(async () => {
  const sleepTime = await new Sleep(1000)
  console.log(sleepTime)
})()
// 借助 await 命令实现的简化版 sleep
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval)
  })
}
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i)
    await sleep(1000)
  }
}
one2FiveInAsync()
// await 命令后面的 Promise 对象如果变为 reject 状态，则 reject 的参数会被 catch 方法的回调函数接收到
// 任何一个 await 语句后面的 Promise 对象变为 reject 状态，那么整个 async 函数都会中断执行
async function f2() {
  await Promise.reject('出错了')
  await Promise.resolve('Hello World') // 不会执行，因为第一个 await 语句状态变成了 reject
}
f2()
  .then(v => console.log(v))
  .catch(e => console.log(e))

// 有时我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个 await 放在 try...catch 结构里面，这样不管这个异步操作是否成功，第二个 await 都会执行
async function f3() {
  try {
    await Promise.reject('出错了')
  } catch (e) {
  }
  return await Promise.resolve('hello world')
}
f3()
  .then(v => console.log(v))
// 另一种方法是 await 后面的 Promise 对象再跟一个 catch 方法，处理前面可能出现的错误
async function f4() {
  await Promise.reject('出错了')
    .catch(e => console.log(e))
  let res1 = await Promise.resolve('hellow')
  return await Promise.resolve(res1 + ' world')
}
f4()
  .then(v => console.log(v))




/*
  错误处理
*/
// 如果 await 后面的异步操作出错，那么等同于 async 函数返回的 Promise 对象被 reject 
async function f5() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了')
  })
}
f5()
  .then(v = console.log(v))
  .catch(e => console.log(e)) // await 后面的 Promise 对象抛出一个错误对象，导致 catch 方法的回调函数被调用，它的参数就是抛出的错误对象；防止出错的方法，也是将其放在 try...catch 代码块之中

// 如果有多个 await 命令，可以统一放在 try...catch 结构中
async function main() {
  try {
    const val1 = await firstStep()
    const val2 = await secondStep(val1)
    const val3 = await thirdStep(val1, val2)

    console.log('final: ', val3)
  } catch(err) {
    console.error(err)
  }
}





/****************
  使用注意点
****************/
// 1. await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中
// 2. 多个 await 命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
// 3. await 命令只能用在 async 函数之中，如果用在普通函数，就会报错
// 4. async 函数可以保留运行堆栈

// 例2：继发关系
    // // let foo = await getFoo()
    // // let bar = await getBar()
// 上面代码中，getFoo 和 getBar 是两个独立的异步操作(即互不依赖)，被写成继发关系。这样比较耗时，因为只有 getFoo 完成以后，才会执行 getBar，完全可以让它们同时触发
// 写法一
    // // let [foo, bar] = await Promise.all([getFoo(), getBar()])
// 写法二
    // // let fooPromise = getFoo()
    // // let barPromise = getBar()
    // // let foo = await fooPromise
    // // let bar = await barPromise
// 上面两种写法，getFoo 和 getBar 都是同时触发，这样就缩短程序的执行时间