const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'demoMobx',
            template: './index.html',
            filename: 'page.html'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map'
}

module.exports = config