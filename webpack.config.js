module.exports = {
    entry: './src/ezreal.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'ezreal.js'
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