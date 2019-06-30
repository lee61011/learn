//  导入 fs 核心模块
var fs = require('fs')

//  读取文件
//      第一个参数是要读取的文件路径
//      第二个参数是一个回调函数
//  如果读取成功：error 就是 null； data 就是读取到的数据
//  如果读取失败：error 就是 错误对象； data 是 undefined

//  文件中存储的都是二进制数据，可以通过 toString 方法将其转换为我们能够识别的字符
fs.readFile('./hello.txt', function (error, data) {
    if (error) {
        console.log(error)
        return
    }
    console.log(data.toString())
})