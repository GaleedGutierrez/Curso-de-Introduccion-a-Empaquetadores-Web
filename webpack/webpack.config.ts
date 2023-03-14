import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
	]
}
