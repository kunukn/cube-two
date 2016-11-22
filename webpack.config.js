;
var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackStrip = require('strip-loader');

var ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    devtool: 'source-map',
    context: path.resolve('./'),
    entry: {
        vendors: ['hammerjs/hammer'],
        appUi: ['./src/assets/scripts/app-ui'],
        app: ['./src/assets/scripts/app'],
        //app: ['webpack-dev-server/client?http://localhost:8080/', './src/assets/scripts'],
    },
    output: {
        path: path.resolve('dist'),
        publicPath: 'http://localhost:3333/',
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    /*
    htmlLoader: {
        minimize: false
    },
    */
    devServer: {
        contentBase: './',
        noInfo: true,
        port: 3456,
        //historyApiFallback: true,
        //stats: 'minimal',
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),

        new webpack.DefinePlugin({
            "process.env": {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new webpack.ProvidePlugin({
            "Hammer": "hammerjs/hammer"
        }),

        //new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'].reverse(), minChunks: Infinity }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            //hash: true,
        })
    ],
    module: {
        preLoaders: [
            /*            {
             test: /\.js$/,
             include: getPath('src/assets/scrips'),
             loader: 'jshint-loader',
             }*/
        ],
        loaders: [{
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html-loader?minimize=true&removeComments=false&conservativeCollapse=true&collapseWhitespace=true"
        }, {
            test: /\.js$/,
            //include: [getPath('src/assets/scrips')],
            exclude: /node_modules/,
            loaders: ['babel-loader'],
        }, {
            test: /\.scss$/,
            //exclude: /node_modules/,
            include: [getPath('src/assets/styles')],
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 1 versions!sass-loader'),
            //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
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
            include: [getPath('src/assets/images')],
            loader: 'url-loader?limit=10000',
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: {
        //"hammerjs/hammer": "Hammer"
    },
};


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}