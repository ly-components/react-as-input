const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Input',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'React'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  postcss: [require('autoprefixer')],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src')]
    }, {
      test: /\.less/,
      loaders: ['style', 'css', 'postcss', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  }
};
