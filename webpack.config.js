/*
	If a webpack.config.js is present, the webpack command picks it up by default.
	LOADING CSS
		webpack uses a regular expression
		 to determine which files it should look for
		  and serve to a specific loader.
		 In this case any file that ends with .css
		  will be served to the style-loader
		   and the css-loader.
*/

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: './client.js',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
  	rules: [
  		{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
  			test: /\.css$/,
  			use: [MiniCss.loader, "css-loader"]
  		},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|tts|otf)$/,
        use: [
          'file-loader'
        ]
      }
  	]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCss({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};