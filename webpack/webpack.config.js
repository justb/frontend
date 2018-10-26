const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackDevServer = require("webpack-dev-server")
console.log(process.env.NODE_ENV)
module.exports = {
	entry: {
		vendor: ["react", "react-dom"],
		app: "./src/index.js"
	},
	output: {
		filename: "[name].js"
	},
	// something do not need to bundle
	externals: {
		jquery: "jQuery"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
        port: 9001,
        open: true,
        hot: true,
        hotOnly: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: "babel-loader",
						options: { presets: ["react"], plugins: ["syntax-dynamic-import"] }
					}
				],
				exclude: /\.styl$/
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', {
					loader: 'stylus-loader',
					options: {
						import: path.resolve(__dirname, './webpack/common.styl'),
						path: ''
					}
				}],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin({
			// Options...
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
			// minify: {
			//     removeComments: true,
			//     collapseWhitespace: true,
			//     removeAttributeQuotes: true
			//     // more options:
			//     // https://github.com/kangax/html-minifier#options-quick-reference
			// },
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: "dependency"
		}),
		
	],
	// optimization: {
	//     splitChunks: {
	//         chunks: "async",
	//         minSize: 30000,
	//         minChunks: 1,
	//         maxAsyncRequests: 5,
	//         maxInitialRequests: 3,
	//         automaticNameDelimiter: '~',
	//         name: true,
	//         cacheGroups: {
	//             vendors: {
	//                 test: /[\\/]node_modules[\\/]/,
	//                 priority: -10
	//             },
	//         default: {
	//                 minChunks: 2,
	//                 priority: -20,
	//                 reuseExistingChunk: true
	//             }
	//         }
	//     }
	// }
	optimization: {
		runtimeChunk: false,
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "all",
					minChunks: 3,
					enforce: true
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	}
}
