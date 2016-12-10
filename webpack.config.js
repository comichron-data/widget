module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'script.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
