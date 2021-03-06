module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'script.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['raw', 'postcss', 'sass']
    }]
  }
};
