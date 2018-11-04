var path = require('path');

var config = {

    /* 在 package.json 的 script 里增加一个快速启动 webpack-dev-server 服务的脚本 */
    /* "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open --config webpack.config.js"
    }, */

    //  当运行 npm run dev 命令时, 就会执行 webpack-dev-server --open --config webpack.config.js 命令  默认地址是 127.0.0.1:8080

    /* "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --host 172.172.172.1 --port 8888 --open --config webpack.config.js"
    }, */
    //  这样修改之后就将访问地址改为了 172.172.172.1:8888

    //  在目录下新建一个空的 main.js 作为入口文件, 然后在 webpack.config.js 中进行入口和输出的配置
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    }


};

module.exports = config;