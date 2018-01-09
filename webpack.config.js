//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
  context: path.join(__dirname),
  //devtool: debug ? "inline-sourcemap" : null,
  devtool:"inline-sourcemap",
  entry: "./src/js/root.js",
  module: {
    rules:[
        {
            test: /\.bundle\.js$/,
            use: 'bundle-loader'
          },
      {
          test:/\.js$/,
          exclude: /node_modules/,
          use: [{
              loader: "babel-loader",
              options: { 
                  presets: ["react","es2015"]
                 // plugins: []                  
               }
  
          }]

      },
      {
          test:/\.css$/,
          use:[
              {loader:'style-loader'},
              {
                  loader:'css-loader',
                //   options:{
                //     root: '.' ,
                //     modules:true
                
                //   }
                
              }
          ]
      },
      {  
        test: /\.png$/, 
        use: [ 
            {  
                loader: 'url-loader',  
                // options: {  
                //     limit: '1024'  
                // }  
            },  
        ]  
    }
  ]},
  output: {
    path: __dirname,
    filename: "./src/js/bundle.js"
  },
  //资源服务器，实现热加载
  devServer:{
    historyApiFallback:true,
    port:9090
  },
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),//以下三个是可有可无的性能优化插件
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],

//   plugins: [
//     new HtmlWebpackPlugin({
//         title: 'demo',
//         template: 'index.html' // 模板路径
//        })
//   ]
};
