// 写一个聊天室 可以设置昵称 可以广播
let net = require('net')
let clients = {}
let server = net.createServer(function(socket) {
  socket.setEncoding('utf8')
  server.getConnections((err, count) => {
    socket.write('欢迎光临本聊天室，现在在线人数是' + count + '位，请输入你的昵称\r\n')
  })
  // 第一步要给username赋值
  let username
  socket.on('data', function(data) {
    data = data.replace(/\r\n/, '')
    if (username) {
      broadcast(username, `${username}:${data}`)
    } else {
      if(clients[data]) {
        socket.write('用户名已被占用\r\n')
      } else {
        username = data // 把用户输入的信息当成用户名
        clients[username] = socket // 缓存用户的socket，方便以后广播用
        broadcast(username, `欢迎${username}加入聊天室`)
      }
    }
  })
  socket.on('end', function() {
    broadcast(username, `欢送${username}离开聊天室`) // 向所有客户端发送消息
    clients[username] && clients[username].destroy() // 销毁此socket
    delete clients[username]
  })
})

function broadcast(username, msg) {
  for(let name in clients) {
    if (name !== username) {
      clients[name].write(msg + '\r\n')
    }
  }
}

server.listen(8080, () => {
  console.log('TCP聊天室已经启动成功，信息是', server.address())
})
