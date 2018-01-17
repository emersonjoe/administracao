var webpack = require("webpack");
console.log('process.env.PORT || 3333', process.env.PORT || 3333)
module.exports = {
    entry: './app/App.js',
    output: {
        path: '/public', 
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: process.env.PORT || 3333
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
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         inject: false,
    //         template: resolve('lib', 'shared', 'local-core', 'index.html'),
    //         title: 'Administração',
    //         css: [
    //         ],
    //         js: [
    //         ]
    //     })
    // ]
}