const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to JavaScript files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use Babel loader to transpile JavaScript
        },
      },
      {
        test: /\.css$/,  // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Directory for static files
    compress: true,  // Enable gzip compression
    port: 9000,  // Port to run the development server
  },
};
module.exports = {
    // Other Webpack configuration options...
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Setup your custom middleware
        devServer.app.use((req, res, next) => {
          // Custom middleware logic here
          next();
        });
  
        // Add more middlewares if needed
        // Example: middlewares.push(yourMiddlewareFunction);
  
        return middlewares;
      }
    }
  };
  
