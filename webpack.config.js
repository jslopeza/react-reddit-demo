const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'source-maps',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/build/',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'src'),
		}]
	}
};
