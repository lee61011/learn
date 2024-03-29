// resume pause
let net = require('net')
let path = require('path')
let ws = require('fs').createWriteStream(path.join(__dirname, 'msg.txt'))

// socket 代表跟客户端的连接
let server = net.createServer(function(socket) {
  // socket.pipe(ws, {end: false}) // 默认情况下，当可读流读到末尾的时候会关闭可写流；end:false表示不关闭

  // socket.pause()
  // // error： write after end 在文件关闭掉之后再次写入
  // setTimeout(function() {
  //   socket.pipe(ws, {end: false})
  // }, 10*1000)

  socket.pause()
  // 设置客户端的超时时间 如果客户端一直不输入超过一定的时间就认为超时了
  socket.setTimeout(3*1000)
  socket.on('timeout', function() {
    socket.pipe(ws, {end: false})
  })
})

server.listen(8080)
