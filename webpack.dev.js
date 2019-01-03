const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __SERVER__: JSON.stringify('http://localhost:3000'),
            __GA_TRACKING_ID__: JSON.stringify(null),
        }),
        // new CopyWebpackPlugin([
        //     {from: 'bower_components', to: 'bower_components'},
        //     {from: 'node_modules/admin-lte', to: 'theme'}
        // ])
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src/client',
        historyApiFallback: true,
        hot: true,
        hotOnly: true
    }
});

