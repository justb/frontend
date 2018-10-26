const webpack = require('webpack')
const path = require('path')
module.exports = env => {
    const devMode = true
    console.log(env)
    return {
        entry: {
            // vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'flux', 'axios', 'react-bootstrap', 'react-bootstrap-table', 'moment'],
            app: path.resolve(__dirname, './index.js')
        },
        output: {
            filename: '[name].[hash:7].js',
            publicPath: '/home/'
        },
        resolve: {
            modules: [path.resolve(__dirname, '../node_modules')],
            alias: {
                '@': path.resolve(__dirname, './src')
            },
            extensions: ['.jsx', '.js', '.scss']
        },
        devtool: devMode ? 'source-map' : '',
        // something do not need to bundle
        // externals: {
        //     jquery: 'jQuery'
        // },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: false,
            port: 9000,
            open: true,
            openPage: 'home/',
            hot: true,
            hotOnly: true,
            proxy: {
                '/': {
                    target: 'http://10.41.64.110:8081'
                    // pathRewrite: { '^/api': '' }
                }
            }
        },
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react',
                                [
                                    'env',
                                    {
                                        targets: {
                                            safari: 10
                                        },
                                        debug: false
                                    }
                                ]
                            ],
                            plugins: []
                        }
                    }],
                    exclude: /node_modules/
                },
                {
                    test: /\.styl$/,
                    use: ['style-loader', 'css-loader', {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(__dirname, './stylus-loader/common.styl')
                        }
                    }],

                    exclude: /node_modules/
                }
            ]
        }

    }
}