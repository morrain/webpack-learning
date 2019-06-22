'use strict'

const path = require('path');
const HelloWebpackPlugin = require('./build/CustomPlugin');
const CompilerHooks = require('./build/CompilerHooks');
const webpackMerge = require('webpack-merge');
/**
 * 对于开发类库而言，必须清楚如何配置对类库的适配。其中output.library 和 ouput.libraryTarget这两个属性必须了解【https://www.xlaoyu.info/2018/01/05/webpack-output-librarytarget/】
 * output.library 指定要导出库的名称
 * outpur.libraryTarget 指明要导出的库适配的目标
 * var       : 导出一个var申明的变量
 * assign    : 导出一个到一个未申明的变量。默认自动挂载到全局作用域
 * this      : 导出运行环境的this上。如果在浏览器全局环境，等价于window
 * window    : 导出到window
 * global    : 导出到global, 适用于Node
 * commonjs  : 导出符合cmmonjs的模块
 * commonjs2 : commonjs是导出到 exports[output.library]中  而commonjs2是直接导出到exports上，所以此时其实可以不需要output.library这个配置
 * amd       : 导出符合amd规范的模块
 * umd       : 这个最厉害，这个选项会尝试把库导出给所有的模块定义系统。umd是universal module definition的简写
 */
const targets = ['var', 'assign', 'this', 'window', 'global', 'commonjs', 'commonjs2', 'amd', 'umd', 'jsonp'];

const base = {
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

const targetConf = targets.map(target => webpackMerge(base, {
    output: {
        filename: `bundle.${target}.js`,
        library: 'MyLib',
        libraryTarget: target
    }
}))

module.exports = [base, ...targetConf];