const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
    ]
}
