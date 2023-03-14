import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const PugPlugin = require('pug-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.ts'],
	},
	module: {
		rules: [
		{
				test: /\.ts?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
		},
		{
			test: /\.pug$/,
			loader: PugPlugin.loader, // Pug loader
		},
		{
			test: /\.(css|sass|scss)$/,
			use: ['css-loader', 'sass-loader'],
		},
		// {
		// 	test: /\.js?$/,
		// 	exclude: /node_modules/,
		// 	use: {
		// 		loader: 'babel-loader',
		// 	}
		// }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new PugPlugin({
			pretty: true, // formatting HTML, useful for development mode
			js: {
			  // output filename of extracted JS file from source script
			filename: 'assets/js/[name].[contenthash:8].js',
			},
			css: {
			  // output filename of extracted CSS file from source style
			filename: 'assets/css/[name].[contenthash:8].css',
			},
		})
	]
}
