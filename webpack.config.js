const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

let plugins = PRODUCTION ? [new webpack.EnvironmentPlugin(["NODE_ENV"])] : [new webpack.HotModuleReplacementPlugin(), new webpack.EnvironmentPlugin(["NODE_ENV"])];

let entry = DEVELOPMENT ? ["./js/index.js",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080"
] : ["./js/index.js"];

module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build',
        filename: 'bundle.js'
    }
}