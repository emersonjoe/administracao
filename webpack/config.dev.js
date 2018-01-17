//var webpack = require("webpack");
module.exports = {
    entry: './app/App.js',
    output: {
        path: '/public', 
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: resolve('lib', 'shared', 'local-core', 'index.html'),
            title: 'Administração',
            css: [
            ],
            js: [
            ]
        })
    ]
}