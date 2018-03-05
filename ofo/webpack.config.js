let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.join(__dirname,'src/app.js'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    module: {
		rules: [
			{
				test: /\.js/,
				use: 'babel-loader'
			},
			{
				test: /\.css/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["vue-style-loader", "css-loader"]
                })
			},
			{
		        test: /\.(png|jpg|gif)/,
		        loader: 'file-loader'
        	},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)/,
				use: "url-loader?limit=50000&name=[path][name].[ext]"
			},
			{
				test: /\.vue/,
				use: 'vue-loader'
			}
		]
    },
    plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname,'src/index.html')
		}),
		new ExtractTextWebpackPlugin('css/[name].css'),
    ],
    devServer:{
        port:'8520',
        contentBase:__dirname,
        open:'http://localhost:8520'
    }
}