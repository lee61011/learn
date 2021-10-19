/**
 * fs 核心模块来读写文件
 */
let fs = require('fs')
// flag 表示你将要对这个文件进行何种操作
fs.readFile('./1.txt', {encoding: 'utf-8', flag: 'r'}, function(err, data) {
  if (err) {
    console.error(err)
  } else {
    // console.log(data.toString())
    console.log(data)
  }
})

// 写入文件 flag: a 表示追加数据
// mode: 666 表示 Linux 权限位
// 编码格式 encoding: 'utf-8' 在要写入的字符串转成 Buffer 二进制时用的
fs.writeFile('./2.txt', 'data', {encoding: 'utf-8', flag: 'a', mode: 0o666}, function(err) {
  console.log(err)
})

// 追加文件，与 fs.writeFile => flag: 'a' 效果相同
fs.appendFile('./2.txt', 'data', function(err) {
  console.log(err)
})





// 以上都是把文件当成一个整体来操作
// 当文件特别大的，大于内存的是无法执行这样的操作的
// 我们需要精确的控制读取的字节
// fd: file dispcriptor 文件描述符  =>  0标准输入 1标准输出 2错误输出
/**
 * process.stdin.on('data', function(data) {
      // 监听控制台键盘标准输入
      console.log(data)
    })
 */
// console.log('hello') // => process.stdout.write('hello')
// console.error('wrong') // => process.stderr.write('wrong')
fs.open('./1.txt', 'r+', 0o666, function(err, fd) {
  // w表示清空并写入  a追加写入 r+表示读写
  // fd => 文件描述符
  console.log(fd)
  // 三个数字参数表示：offset读取Buffer偏移量  length读三个字节  position写入索引
  fs.write(fd, Buffer.from('珠峰'), 3, 3, 0, function(err, bytesWritten) {
    console.log(bytesWritten)
  })

  let buff = Buffer.alloc(3)
  // buffer写入索引 从文件中读取几个字节 文件的读取位置
  fs.read(fd, buff, 0, 3, 0, function(err, bytesRead) {
    console.log('fs.readSync - buff.toString ------ ', buff.toString())
  })
})





