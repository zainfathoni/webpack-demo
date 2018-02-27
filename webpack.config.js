const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
