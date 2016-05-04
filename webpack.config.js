module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'darius.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'stage-0', 'react' ],
                }
            }
        ]
    }
};