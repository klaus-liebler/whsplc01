const webpack = require("webpack");
const path = require('path');

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

let distPath = path.join(__dirname, "wwwdist");
let srcPath = path.join(__dirname, "wwwsrc");

let DEVMODE = false;

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
      DEVMODE=true;
    }
    else if (argv.mode === 'production') {
        DEVMODE=false;
    }
    
    let config =  {
        target: "web",
        entry: path.join(srcPath, "index.ts"),
        devtool: DEVMODE ? 'inline-source-map' : false,
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json', '.scss']
        },
        stats: { colors: true },
        optimization: {
            minimizer: [
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: DEVMODE
              }),
              new OptimizeCSSAssetsPlugin({})
            ]
          },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        DEVMODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                      'css-loader',
                      'sass-loader',
                    ],
                }
            ]
        },
        plugins: [
            //new CompressionPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new CleanWebpackPlugin([distPath], { verbose: false }),
            
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(srcPath, "index.html")
            }),
            new HtmlWebpackInlineSourcePlugin()
        ],
        output: {
            path: distPath,
            filename: "[name].js"
        }
    };
    console.log("============================v.devtool="+config.devtool);
    return config;
  };