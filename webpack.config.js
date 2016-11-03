const path = require('path');

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
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
