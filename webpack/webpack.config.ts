import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import 'webpack-dev-server';

const devMode = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
	entry  : './src/index.ts',
	output : {
		path     : path.resolve(__dirname, 'dist'),
		filename : 'main.js'
	},
	resolve : {
		extensions : ['.ts'],
	},
	module : {
		rules : [
			{
				test    : /\.ts?$/,
				exclude : /node_modules/,
				use     : {
					loader  : 'babel-loader',
					options : {
						presets : [ '@babel/preset-env', '@babel/preset-typescript' ]
					}
				}
			},
			{
				test : /\.scss?$/i,
				use  : [
					devMode
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
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
	plugins : [
		new HtmlWebpackPlugin({
			inject   : true,
			template : './public/index.html',
			filename : './index.html'
		}),
		new MiniCssExtractPlugin(),
	]
};

export default config;
