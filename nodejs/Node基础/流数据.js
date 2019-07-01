let fs = require('fs')
let stream = fs.createReadStream('./hello.txt')

//  通过将数据一块一块地传送，开发人员可以每收到一块数据就开始处理，而不用等所有数据都到全了再处理
//  只要有新的数据块准备好，就会激发 data 事件，当所有数据块都加载完之后，就会激发一个 end 事件
//  有了对读取流的底层访问，程序就可以边读取边处理，这要比等着所有数据都缓存到内存中再处理效率高得多
stream.on('data', function (chunk) {
    console.log(chunk)
})
stream.on('end', function () {
    console.log('finished')
})