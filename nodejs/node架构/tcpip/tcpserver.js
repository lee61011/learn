let net = require('net')

// 创建一个服务器 监听客户端的连接 当客户端连接上来之后执行监听函数
let server = net.createServer({}, function(socket) {
  console.log('客户端已经连接')
  console.log(socket.address())
  socket.on('data', function(data) {
    console.log('接收到客户端发过来的数据: %s %s', data, 1)
    // console.log('服务器确认: ' + data)
    socket.write('服务器确认: ' + data)
  })
  socket.on('error', function(err) {
    console.log(err)
  })
  socket.on('end', function() {
    console.log('end')
  })
})

// 控制面板/程序和功能/启用或关闭Windows功能 => 启用Telnet客户端功能
// cmd 命令行输入 telnet localhost 8080 连接服务
server.listen(8080, function() {
  console.log(server.address())
  console.log('服务启动成功')
})