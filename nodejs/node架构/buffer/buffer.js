
// 表示分配 一个长度为6个字节的 Buffer
// 会把所有的字节设置为0
// 可以提供默认值
let buf1 = Buffer.alloc(6, 2)
console.log(buf1)

// 分配一块没有初始化的内存
let buf2 = Buffer.allocUnsafe(60)
console.log(buf2)

let buf3 = Buffer.from('张三')
console.log(buf3)


let buf4 = Buffer.alloc(6)
console.log(buf4)
// 1填充的值 2填充的开始索引 3结束索引
buf4.fill(3,1,3) // [0,3,3,0]
console.log(buf4)

// 1写的字符串 2填充的开始索引 3填充的字节长度 4编码
buf4.write('张三', 0, 3, 'utf-8')
console.log(buf4.toString())
buf4.write('张三', 3, 3, 'utf-8')
console.log(buf4.toString())


let buf5 = Buffer.alloc(6)
// 向指定的索引写入一个8位的整数，也就是说占用一个字节的整数
buf5.writeInt8(0, 0)
buf5.writeInt8(16, 1)
buf5.writeInt8(32, 2)
console.log(buf5) // []


let buf6 = Buffer.alloc(4)
// Big Endian 大头在前
// Little Endian 小头在前
// BE 就是高位在前
buf6.writeInt16BE(256, 0)
console.log(buf6) // [01, 00, 00, 00]
// LE就是低位在前
buf6.writeInt16LE(256, 2)
console.log(buf6) // [01, 00, 00, 01]

// 把buffer转成字符串
console.log(buf6.toString())


let buf7 = Buffer.alloc(6, 1)
let buf8 = buf7.slice(2, 6)
console.log(buf8)
buf8.fill(4)
console.log(buf7) // .slice是浅拷贝




/**
 * string_decoder
 *  它的出现是为了解决乱码问题
 */
let buf9 = Buffer.from('交通大学')
let buf10 = buf9.slice(0, 5)
let buf11 = buf9.slice(5)

let {StringDecoder} = require('string_decoder')
let sd = new StringDecoder()
// write 就是读取buffer的内容，返回一个字符串
// write的时候会判断是不是一个字符，如果是的话就输出不是的话则缓存在对象内部，等下次write的时候会把前面缓存的字符加到第二次write的buffer上在进行判断
console.log(sd.write(buf10))
console.log(sd.write(buf11))



// concat连接buffer
let buf23 = Buffer.from('交')
let buf24 = Buffer.from('通')
Buffer.concat2 = function(list, total=list.reduce((len, item) => len+item.length, 0)) {
  if(list.length == 1) {
    return list[0]
  }
  let result = Buffer.alloc(total)
  let index = 0
  for(let buf of list) {
    for(let b of buf) {
      if(index >= total) {
        return result
      } else {
        result[index++] = b
      }
    }
  }
  return result
}
// let result = Buffer.concat([buf23, buf24])
let result = Buffer.concat2([buf23, buf24])
console.log(result)

