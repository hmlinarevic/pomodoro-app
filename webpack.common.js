const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				use: 'html-loader',
			},
			// {
			// 	test: /\.(png|svg|jpg|jpeg|gif)$/i,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[hash].[ext]',
			// 		},
			// 	},
			// },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
