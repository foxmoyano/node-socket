const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './app.js',
        public: './public/js/socket-client.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    target: 'node', // indica que el código se ejecutará en Node.js
    externals: [nodeExternals()], // excluye las dependencias de node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html', // la ruta al archivo HTML principal de tu aplicación
          filename: './public/index.html' // el nombre del archivo HTML de salida
        })
    ]    
};
