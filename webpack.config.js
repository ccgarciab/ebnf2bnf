const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/js/main.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        fallback: { fs: false }
    },
    output: {
        filename: 'ebnf.js',
        path: path.resolve(__dirname, 'assets/js/'),
        library: 'EBNF',
        libraryTarget: 'var'
    },
};