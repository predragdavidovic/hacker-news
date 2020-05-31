/* global PROF  */

const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Managment',
            template: './src/template.html',
            favicon: './src/assets/favIcon.ico'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    },
                },
                exclude: '/node_modules/',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true,
                  },
              },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
}