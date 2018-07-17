const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('style.css');
	return{
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_module/,
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use:[
						{
							loader: 'css-loader',
							option: {
								sourceMap:true
							}
						},
						{
							loader: 'sass-loader',
							option: {
								sourceMap:true
							}
						},
					]
				})
			}],
		},
		plugins:[
			CSSExtract
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
		},
	}
}