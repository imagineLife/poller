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

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader'
  			]
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
  }
};