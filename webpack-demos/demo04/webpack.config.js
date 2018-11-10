const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* var ExtractTextPlugin = require('extract-text-webpack-plugin'); */
var VueLoaderPlugin = require('vue-loader/lib/plugin');


var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        /* css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }) */
                        css: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    publicPath: '/dist/',
                                    filename: 'main.css'
                                }
                            },
                            "css-loader"
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                /* use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }) */
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/',
                            filename: 'main.css'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        /* new ExtractTextPlugin("main.css"), */
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ]
}

module.exports = config;