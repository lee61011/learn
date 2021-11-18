let dgram = require('dgram')

let socket = dgram.createSocket('udp4')

// 发消息

// 收消息 在本机的41234端口上监听消息
socket.bind(41234, 'localhost')
// 监听对方发过来的消息 rinfo: remoteInfo
socket.on('message', function(msg, rinfo) {
  // 设置为 true 就表示要广播了
  socket.setBroadcast(true)
  socket.send(Buffer.from(msg), 0, msg.length, rinfo.port, '192.168.0.255') // 0.255表示发送给同网络全网IP
  // 还有各个组播功能，可以动态把多个IP分到一个组里，进行广播
})
