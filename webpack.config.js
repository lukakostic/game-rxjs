const path = require('path');


module.exports = {
  entry: './build/ts/Main.js',  // Update this to the path to your actual entry file
  output: {
    path: path.resolve('./build'),
    filename: 'min.js',
  },
  
  target: 'web',
 optimization: {
    minimize: false
 },
 
  /*
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  */
  //mode: 'development',
  mode: 'production',
};