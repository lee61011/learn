let dgram = require('dgram')

let socket = dgram.createSocket('udp4')

// 发消息

// 收消息 在本机的41234端口上监听消息
socket.bind(41234, 'localhost')
// 监听对方发过来的消息 rinfo: remoteInfo
socket.on('message', function(msg, rinfo) {
  console.log(msg.toString())
  // 接收 9.udpclient.js 发过来的数据并转发回去
  socket.send(Buffer.from(msg), 0, msg.length, rinfo.port, rinfo.address)
})
