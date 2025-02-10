const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development", // Set mode
  entry: "./src/index.js", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  devServer: {
    static: "./dist", // Serve files from the 'dist' directory
    hot: true, // Enable Hot Module Replacement (HMR)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use Babel for transpilation
        },
      },
      {
        test: /\.css$/, // Example for CSS files
        use: ["style-loader", "css-loader"],
      },
      // Add more rules for other file types (e.g., images, fonts) as needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template HTML file
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing .js and .jsx files without specifying extensions
  },
};
