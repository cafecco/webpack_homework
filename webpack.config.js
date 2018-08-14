const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contenthash].js'
	},
	module: {
		rules: [
			{
			test: /\.js/,
			exclude: /node_modules/,
			loader: 'babel-loader'
			},
			{
				test: /\.css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
		new HtmlWebpackPlagin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		})
	]
};