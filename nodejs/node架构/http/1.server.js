// 如何创建一个http服务器
// http服务器是继承自tcp服务器 http协议是应用层协议，是基于TCP的
// 对请求和响应进行了包装
let http = require('http')
// req 对象流 是可读流
// res 是一个可写流 write
// 发消息就等于与客户端连接吗？

let server = http.createServer()
let url = require('url') // 核心模块，实现url路径解析

// 当客户端连接上服务器之后执行回调
server.on('connection', function(socket) {
  console.log('客户端连接');
})
// 服务器监听客户端的请求，当有请求到来的时候执行回调
// 使用命令行发送请求：curl -v -d "name=zfpx" -X POST http://localhost:8080
/**
  > POST / HTTP/1.1
  > Host: localhost:8080
  > User-Agent: curl/7.55.1
  > Accept: *\/*
  > Content-Length: 9
  > Content-Type: application/x-www-form-urlencoded
 */
// req代表客户端的连接，server服务器把客户端的请求信息进行解析，然后放在req上面
// res代表响应，如果希望向客户端回应消息，需要通过res
server.on('request', function(req, res) {
  // console.log('request -- ', req, res)
  // 获取请求方法名、请求路径、协议、请求头对象
  console.log('req -- ', req.method, req.url, req.protocal,req.headers)
  // let urlObj = url.parse(req.url)
  // console.log(urlObj);
  let { pathname, query } = url.parse(req.url, true)
  console.log(pathname, query);

  let result = []
  req.on('data', function(data) {
    result.push(data)
  })
  req.on('end', function() {
    let r = Buffer.concat(result) // 请求体
    console.log(r.toString());
    res.end(r)
  })
})
server.on('close', function(req, res) {
  console.log('服务器关闭');
})
server.on('error', function(err) {
  console.log('服务器错误', err)
})
server.listen(8080, function() {
  console.log('server started at http://localhost:8080')
})