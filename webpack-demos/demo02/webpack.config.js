var path = require('path');
//  导入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                /* 当遇到后缀名称为 .css 的文件时, 使用 css-loader 和 style-loader 进行转换 */
                test: /\.css$/,
                /* use 选项的值可以是数组或字符串, 如果是数组, 他的编译顺序就是从后往前 */
                /* use: [
                    'style-loader',
                    'css-loader'
                ] */

                /* 使用插件打包改变生成样式文件位置 */
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },

    plugins: [
        //  重命名提取后的 css 文件
        new ExtractTextPlugin('main.css')
    ]
}

module.exports = config;