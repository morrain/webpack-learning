'use strict'

const path = require('path');
const HelloWebpackPlugin = require('./build/CustomPlugin');
const CompilerHooks = require('./build/CompilerHooks');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
        minimizer: []
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')]
            }
        ]
    },
    plugins: [
        new HelloWebpackPlugin(),
        new CompilerHooks()
    ]
};