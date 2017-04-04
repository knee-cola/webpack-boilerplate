const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		// here we need to set an absolute path - we're resolve path at runtime
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				// this [test] is applied to [require] statements in [app.js] file
				// ... so CSS needs to be required from JavaScript in order for WebPack to procerss it
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					// in case the ExtractTextPlugin doesn't  extract the CSS,
					// then the output of 'css-loader' will be forwarded to
					// to fallback loader
					fallback: 'style-loader',
					use: [
						// loaders are execure starting from bottom - the last in the list
						'css-loader', // translates CSS into CommonJS  
						'sass-loader' // compiles Sass to CSS 
					],
					publicPath: "./dist"
				})
			}
		]
	},
	// Dev-Server options can be found at:
	// https://webpack.js.org/configuration/dev-server/
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		stats: 'errors-only',
		open: true // will automatically open browser window at startup
	},
	plugins: [
		// Generates default index.html
		new HtmlWebpackPlugin({
			title: "This title is set from config file",
			template: './src/index.ejs',  // load a custom template
			minify: {
				// collapseWhitespace: true
			},
			hash: true // cache busting for JS and CSS files - a hash will be added to after ".js" and ".css"
		}),
		new ExtractTextPlugin({
			filename:"app.css", // here we configure how the resulting CSS file will be named
			disable: false,
			allChunks: true
		})
		
	]
}