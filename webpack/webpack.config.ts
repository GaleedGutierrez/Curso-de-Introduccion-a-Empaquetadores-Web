import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import 'webpack-dev-server';

const devMode = process.env.NODE_ENV !== 'production';

const config: Configuration = {
	entry  : './src/index.ts',
	output : {
		path     : path.resolve(__dirname, 'dist'),
		filename : 'main.js'
	},
	resolve : {
		extensions : [ '.ts', '.js' ],
	},
	devServer : {
		static             : path.join(__dirname, 'dist'),
		compress           : true,
		port               : 8081,
		historyApiFallback : true,
		// devMiddleware      : {
		// 	writeToDisk : true
		// },
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
					MiniCssExtractPlugin.loader,
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
			title    : 'My Card Presentation',
			template : 'public/index.html',
			filename : 'index.html'
		}),
		new MiniCssExtractPlugin(),
	]
};

export default config;
