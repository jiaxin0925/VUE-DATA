# webpack
webpack 打爆你的一切

## 如何使用
'''
<!--

 es5
1:npm i webpack -g
2:npm i webpack --save-dev / -D
3:touch webpack.confij.js 

-->
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./entry.js'// 可以是数组 字符串 对象 【js的入口】
    output:{
        filename:'bundle.j',// 打包过后的js文件
        path:_dirname+'/dist'// 大包裹后你要将js 放置的输出路径
    },
    plugins:[
        new HtmlWebpackPlugin({// 打包并移动 html 的
            template:'./index.html',
            filename:'index.html',
            path:_dirname+'/dist'
        })
    ]
}