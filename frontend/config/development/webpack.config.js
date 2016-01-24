module.exports = {
    devtool: 'inline-source-map',
    entry: {
        top_index: './src/javascripts/top/index.js',
    },
    output: {
        path: '../app/assets/javascripts',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            }
        ]
    }
}
