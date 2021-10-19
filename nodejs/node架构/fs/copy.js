/**
 * 需求：实现一个方法拷贝文件 把 1.txt 拷贝到 2.txt
 *    为了实现节约内存的拷贝，实现读一点写一点
 */

let fs = require('fs')

const BUFFER_SIZE = 3 // 缓存大小3个字节(读三个字节写三个字节)
function copy(src, target) {
  fs.open(src, 'r', 0o666, function(err, readFd) {
    fs.open(target, 'w', 0o666, function(err, writeFd) {
      let buff = Buffer.alloc(BUFFER_SIZE)
      !function next() {
        fs.read(readFd, buff, 0, BUFFER_SIZE, null, function(err, bytesRead, buffer) {
          if (bytesRead > 0)
            fs.write(writeFd, buff, 0, bytesRead, null, next) // next 递归执行
        })
      }();
    })
  })
}
copy('1.txt', '2.txt')
