const path = require('path');
const Webpack = require('webpack');

module.exports = {
    entry: "./src/web/app.js",
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    plugins: [
        new Webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
