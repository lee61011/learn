// parser方法解析请求对象，其实就是请求信息(socket.on(data) 拿到的那个data。) 然后解析出请求头 再传给请求监听函数
// 命令行发送请求方法：curl -v --data "name=zfpx&age=9" http://localhost:8080

let fs = require('fs')
let path = require('path')
let { StringDecoder } = require('string_decoder') // 把buffer转成字符串，可以保证不乱码
let decoder = new StringDecoder()
function parser(requestStream, requestListener) {
  function onReadable (){
    // let data = requestStream.read() // 缓存区64k
    let buf;
    let buffers = []
    while(null != (buf = requestStream.read())) { // 保证可以读取完整数据
      buffers.push(buf)
      let result = Buffer.concat(buffers)
      let str = decoder.write(result)
      if(str.match(/\r\n\r\n/)) { // 两个回车换行 表示请求头和请求体分隔线
        let values = str.split(/\r\n\r\n/)
        let headers = values.shift()
        let headerObj = parseHeader(headers)
        Object.assign(requestStream, headerObj)
        let body = values.join('\r\n\r\n')
        requestStream.removeListener('readable', onReadable)
        requestStream.unshift(Buffer.from(body))
        return requestListener(requestStream)
      }
    }
  }
  requestStream.on('readable', onReadable)
}
function parseHeader(headerStr) {
  let lines = headerStr.split(/\r\n/)
  let startLine = lines.shift()
  let starts = startLine.split(' ')
  let method = starts[0]
  let url = starts[1]
  let protocal = starts[2]
  let protocalName = protocal.split('/')[0]
  let protocalVersion = protocal.split('/')[1]
  let headers = {}
  lines.forEach(line => {
    let row = line.split(': ')
    headers[row[0]] = row[1]
  });
  return { headers, method, url, protocalName, protocalVersion }
}

let rs = fs.createReadStream(path.join(__dirname, 'req.txt'))
parser(rs, function(req) {
  console.log(req.method); // POST
  console.log(req.url); // /
  console.log(req.headers);
  req.on('data', function(data) {
    console.log(data.toString());
  })
  req.on('end', function() {
    console.log('请求处理结束，开始响应 res.end()');
  })
})
