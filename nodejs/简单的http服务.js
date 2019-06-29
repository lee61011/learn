var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
    console.log(request.url);

    /* response.write('hello');
    response.write(' nodejs!');
    response.end(); */
    
    //  上面的方式比较麻烦，推荐使用更简便的方法，直接 end 的同时响应数据
    //  response.end('Hello Nodejs!');

    /* 根据不同的路径响应不同的内容 */
    var url = request.url;

    var product = [
        {
            name: '香蕉',
            price: 1.1
        },
        {
            name: '橘子',
            price: 1.2
        },
        {
            name: '菠萝',
            price: 2.1
        }
    ]

    if (url === '/') {
        response.end('index page');
    } else if (url === '/login') {
        response.end('login page');
    } else if (url === '/product') {
        //  响应内容只能是 二进制数据 或者 字符串
        response.end(JSON.stringify(product));
    } else {
        response.end('404 Not Found!');
    }
});

server.listen(3000, function () {
    console.log('服务器启动成功');
})