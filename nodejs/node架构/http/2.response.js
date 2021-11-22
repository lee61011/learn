let http = require('http')
// 如何向客户端写入响应信息
/**
    < HTTP/1.1 200 OK     响应行
    < Date: Fri, 15 Oct 2021 12:42:36 GMT   响应头
    < Connection: keep-alive
    < Content-Length: 9
    <
    name=zfpx   响应体

    Transfer-Encoding: chunked  分块传输
 */
let server = http.createServer(function(req, res) {
  // 在同一个方法里设置状态码，原因短语，响应头
  res.setHeader('Content-Type', 'text/html')
  console.log('headersSent1', res.headersSent); // 响应头是否已经发送过了
  // writeHead 一旦调用会立刻向客户端发送 setHeader会缓存起来
  res.writeHead(200, {
    "Conent-Type": "text/html;charset=utf8"
  })
  // 当调用writeHead或者调用write方法的时候才会向客户端发送响应头
  console.log('headersSent2', res.headersSent); // 响应头是否已经发送过了

  // res.statusCode = 200 // 设置响应码
  // res.sendDate = false // Date响应头默认会设置 如果真的不想要 可以设置为false
  // res.setHeader('Content-Type', 'text/html;charset=utf8') // 设置响应头
  // console.log(res.getHeader('Content-Type')); // 获取响应头
  // res.removeHeader('Content-Type')
  // res.write('hello')
  // res.write('world')
  // res.end()
  // // res.write('byebye') // res.end 之后的res.write 会报错  write after end 在可写流结束之后再次写入
})
server.on('connection', function(socket) {
  socket.on('end', function() {
    console.log('连接 end');
  })
  socket.on('close', function() {
    console.log('连接 close');
  })
})
server.listen(8080)