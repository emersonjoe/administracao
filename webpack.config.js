const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const autoprefixer = require('autoprefixer');

const staticSourcePath = path.join(__dirname, 'static');
const sourcePath = path.join(__dirname, 'app');
const buildPath = path.join(__dirname, 'public');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        base: path.resolve(staticSourcePath, 'css/base.scss'),
        app: path.resolve(sourcePath, 'app.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            sourcePath,
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js',
            minChunks (module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    })
                ],
                context: staticSourcePath
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            path: buildPath,
            excludeChunks: ['base'],
            title: 'Administração Estética',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'all',
            fileBlacklist: [/\.(css|map)$/, /base?.+/]
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        // new StyleExtHtmlWebpackPlugin({
        //     minify: true
        // }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
                include: sourcePath
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
                use: 'file-loader?name=assets/[name]-[hash].[ext]'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
                ],
                include: staticSourcePath
            }
        ]
    }
};