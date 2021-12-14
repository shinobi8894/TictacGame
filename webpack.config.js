const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.jsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    modules: ['scripts', 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: 'src/index.html' }),
    new webpack.ProvidePlugin({ process: 'process/browser' })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-class-properties'],
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    static: './build',
    port: 4000
  }
}
