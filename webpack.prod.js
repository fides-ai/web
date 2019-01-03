const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');


const DIST = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __SERVER__: JSON.stringify('http://35.245.17.134'),
            __GA_TRACKING_ID__: JSON.stringify('UA-57226696-10'),
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    output: {
        path: DIST,
        filename: '[name].bundle.[hash:6].js',
        publicPath: '/'
    },
});
