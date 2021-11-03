const { Socket } = require('dgram')
let net = require('net')
let socket = new net.Socket()

socket.connect(8080, 'localhost', function() {
  socket.write('hello')
})
socket.setEncoding('utf8')
socket.on('data', function(data) {
  console.log(data)
})

setTimeout(function() {
  socket.end() // 关闭跟服务器的连接
}, 5000)