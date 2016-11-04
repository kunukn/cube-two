;
var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WebpackStrip = require('strip-loader');

var ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
    context: path.resolve('./'),
    devtool: '',
    entry: {
        //  vendors: ['hammerjs/hammer'],        
        appUi: ['./src/assets/scripts/app-ui'],
        app: ['./src/assets/scripts'],
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    /*
     htmlLoader: {
     minimize: false
     },
     */
    plugins: [
        new webpack.NoErrorsPlugin(),

        new ExtractTextPlugin('[name].[hash].css'),

        new webpack.DefinePlugin({
            "process.env": {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new webpack.ProvidePlugin({
            "Hammer": "hammerjs/hammer"
        }),

        /* https://github.com/webpack/webpack/issues/368 */
        //    new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'].reverse(), minChunks: Infinity }),

        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, },
            output: { comments: false },
            mangle: {
                except: ['$']
            },
            sourceMap: false /* OBS! */
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            //hash: true,
        })
    ],
    module: {
        loaders: [{
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html-loader?minimize=true&removeComments=false&conservativeCollapse=true&collapseWhitespace=true"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [WebpackStrip.loader('console.debug', 'console.log', 'debug', 'log'), 'babel-loader']
        }, {
            test: /\.scss$/,
            include: getPath('src/assets/styles'),
            //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 1 versions!sass-loader'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),

        }, {
            test: /\.css$/,
            include: getPath('node_modules/normalize.css'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.ico$/,
            include: getPath('src/assets/images'),
            loader: 'file-loader?name=favicon.ico&context=/',
        }, {
            test: /\.(jpg|png|svg)$/,
            exclude: /node_modules/,
            //include: getPath('src/assets/images'),
            loader: 'url-loader?limit=10000',
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },

    externals: {
        "hammerjs/hammer": "Hammer"
    },
};


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}