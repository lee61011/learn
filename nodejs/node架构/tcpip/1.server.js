let net = require('net')

// 当客户端连接上来的时候会执行对应的回调函数
// socket其实是一个可读可写流，是一个双工流
let server = net.createServer({}, function(socket) { // 如下：该回调函数也可写在connection事件中
  server.maxConnections = 2 // 表示客户端连接的总数量是2个，超出的会拒绝连接
  // 获取当前有多少个客户端正在连接服务器
  server.getConnections((err, count) => {
    console.log(`欢迎光临，现在连接的客户端总数量是${count}个，客户端连接的总数量是${server.maxConnections}`)
  })
  console.log(socket.address())
  socket.setEncoding('utf8')
  // 获取可读流里的数据
  socket.on('data', function(data) {
    console.log(data)
  })
  // 服务器收到客户端发出的关闭连接请求时，会触发end事件
  // 在这个地方客户端还没有真正关闭，只是开始关闭。当真正关闭的时候还会触发一个close事件
  socket.on('end', function() {
    console.log('客户端已关闭')
    // close 服务器端有一个方法叫close，close的意思是如果执行了此方法，那么此客户端将不再接收新的连接，但是也不会关闭现有的服务器
    // 一旦调用此方法，则当所有的客户端关闭跟本服务器的连接后，将关闭服务器
    server.unref()
  })
  // setTimeout(function() {
  //   // 在5秒之后会关闭掉此服务器。不再接收新的客户端了
  //   server.close()
  // }, 5000)
  // hasError如果为true表示异常关闭，否则表示正常关闭
  socket.on('close', function(hasError) {
    console.log('客户端真正关闭', hasError)
  })
  socket.on('error', function(err) {
    console.log('socket error -- ', err)
  })
})


// let server = net.createServer({})
// server.on('connection', function(socket) {
//   // TODO SOMETHING
// })


server.on('error', function(err) {
  console.log('server error -- ', err)
})
server.on('close', function() {
  console.log('服务器端已关闭')
})
server.listen(8080, function() {
  console.log('服务器已经启动')
})
