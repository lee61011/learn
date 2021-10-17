/**
 * 如何实现进制的转换
 */

let a = 0b10010; // 二进制 2^1 + 2^4
console.log(a)
let b = 0o24; // 八进制 2*8^1 + 4*8^0
console.log(b)
let c = 10 // 十进制
let d = 0x14 // 十六进制
console.log(d)

// 如何把任意进制转换成十进制
console.log(parseInt("10100", 2))
console.log(parseInt("0x10", 16)) // parseInt('任意进制字符串', 原始进制)

// 如何把十进制转成任意进制
console.log(c.toString(2)) // 10进制数.toString(目标进制)

// 八进制转十六进制


/**
 * 1. 如何把一个 unicode 码转成 utf8 编码
 *    传进去一个 Unicode 码，返回一个 utf8 编码；万 4E07
 * 
 *          Unicode符号范围         |         UTF-8编码方式
 *            (十六进制)            |           (二进制)
 * ————————————————————————————————+————————————————————————————
 *        0000 0000-0000 007F       |   0xxxxxxx
 *        0000 0080-0000 07FF       |   110xxxxx 10xxxxxx
 *        0000 0800-0000 FFFF       |   1110xxxx 10xxxxxx 10xxxxxx
 *        0001 0000-0010 FFFF       |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 */

// utf8 是 Unicode 一种存储方式  是一种实现
function transfer(number) {
  // 该方法只针对 0000 0800-0000 FFFF 范围汉字做转换 未兼容范围外其他字符
  let arr = ['1110', '10', '10']
  let str = number.toString(2) // 100111000000111
  arr[2] += str.substring(str.length-6)
  arr[1] += str.substring(str.length-12, str.length-6)
  arr[0] += str.substring(0, str.length-12).padStart(4, '0')
  return arr.map(item => parseInt(item, 2).toString(16))
}
// Unicode都是16进制 所有的汉字都是3个字节
let r = transfer(0x4e07); // 0x 16进制
let br = parseInt(0x4E07.toString(2))
console.log(br) // 100111000000111
// 111000100 10111000 10000111
console.log(0b11100100.toString(16)) // e4
console.log(0b10111000.toString(16)) // b8
console.log(0b10000111.toString(16)) // 87
// e4b887   console.log(Buffer.from('万')) => <Buffer e4 b8 87>







console.log('main1')

process.nextTick(function() {
  console.log('process.nextTick1')
})

setTimeout(function() {
  console.log('setTimeout')
  process.nextTick(function() {
    console.log('process.nextTick2')
  })
}, 0)

new Promise(function(resolve, reject) {
  console.log('promise')
  resolve()
}).then(function() {
  console.log('promise then')
})

console.log('main2')
