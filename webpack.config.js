let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:'./app/index.html'
       })
    ],
    devtool:'source-map',
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};