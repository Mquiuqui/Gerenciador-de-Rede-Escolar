
const path = require('path');

module.exports = {
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'api.bundle.js'
    },
    target: 'node',
    externals: { typeorm: 'commonjs typeorm' },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
};