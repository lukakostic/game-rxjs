const path = require('path');


module.exports = {
  entry: './src/assets/build/rxjs/Main.js',  // Update this to the path to your actual entry file
  output: {
    path: path.resolve('./src/assets/build'),
    filename: 'min.js',
  },
  
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
  mode: 'development',
  //mode: 'production',
};