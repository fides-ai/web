const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src/client');

module.exports = {
    entry: {
        web: [`${SRC}/apps/web/index.js`]
    },
    output: {
        path: DIST,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: [
                    /\.png$/,
                    /\.jpg$/
                ],
                use: {
                    loader: 'url-loader'
                }
            }
        ],
        // noParse: /\.min\.js/
    },
    stats: {
        colors: true
    },
    target: 'node',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/client/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
