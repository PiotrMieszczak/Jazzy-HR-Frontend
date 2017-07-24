const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'dist/app.js': ['whatwg-fetch', './src/js/app.jsx'],
        'dist/main.css~': './src/scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/style.css'),
    ]


}