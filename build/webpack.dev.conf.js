'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

//配置模拟的json
const express = require('express')
const web = express()//请求server
var webData = require('../data.json')//获取的json对象
var login =webData.login;//登录数据
var mainPath =webData.mainPath;//主页数据
var weightIndex =webData.weightIndex;//权重比数据
var inputIndex =webData.inputIndex;//数据录入
var review =webData.review;//修改密码
var bookShow =webData.bookShow;//展示书
var starBooks =webData.starBooks;//收藏书
var apiRoutes = express.Router();//配置路由
web.use('/apis',apiRoutes)//通过路由请求数据

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(web){
      //配置mock数据路由
      web.get('/apis/webData',(req,res)=>{//总数据
        res.json({
          msg:200,
          data:webData
        });
      }),
      web.post('/apis/login',(req,res)=>{//登录数据
        res.json({
          msg:200,
          data:login
        });
      }),
      web.get('/apis/mainPath',(req,res)=>{//对应获取到的mainPath数据
        res.json({
          msg:200,
          data:mainPath
        });
      }),
      web.get('/apis/weightIndex',(req,res)=>{//对应获取到的linkdata
        res.json({
          msg:200,
          data:weightIndex
        });
      }),
      web.get('/apis/inputIndex',(req,res)=>{//对应获取到的linkdata
        res.json({
          msg:200,
          data:inputIndex
        });
      }),
      web.get('/apis/review',(req,res)=>{//对应获取到的linkdata
        res.json({
          msg:200,
          data:review
        });
      }),
      web.get('/apis/bookShow',(req,res)=>{//对应获取到的linkdata
        res.json({
          msg:200,
          data:bookShow
        });
      }),
      web.get('/apis/starBooks',(req,res)=>{//对应获取到的linkdata
        res.json({
          msg:200,
          data:starBooks
        });
      })
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
