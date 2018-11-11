/* 用于生产环境的配置文件 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.js');

//  清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        //  将入口文件重命名为带有 20 位 hash 值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        new MinicssExtractPlugin({
            //  提取 css, 并重命名为带有 20 位 hash 值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true
        }),
        //  定义当前 node 环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //  压缩 js
        /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }), */
        //  webpack.optimize.UglifyJsPlugin has been removed
        //  https://webpack.docschina.org/configuration/optimization/#optimization-minimize



        //  提取模板, 并保存入口 HTML 文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ],
    optimization: {
        minimize: false
    }
})