'use strict'
const path = require('path');

module.exports = {
  // // フロントエンドのルートディレクトリ(却って分かりづらいので指定しない)
  // context: path.resolve(__dirname, './lib/js'),
  // ソースマップのスタイル(webpack-commandのdevtoolオプションで指定する)
  // devtool: isProduction ? '' : 'cheap-eval-source-map', //'hidden-source-map' : 'inline-source-map',
  // // ビルドモード(webpack-commandのmodeオプションで指定する)
  // mode: isProduction ? 'production' : 'development',
  
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    index: path.resolve(__dirname, './src/index.tsx'),
  },
  
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, './dist/js'),
    // 出力ファイル名
    filename: '[name].js',
  },

  resolve: {
    // import時に探す拡張子
    extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ],
  },

  // モジュール設定
  module: {
    rules: [
      {
        // TypeScriptの設定
        test: /\.tsx?$/, // lang=ts
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        // stylusの設定
        test: /\.styl(?:us)?$/, // lang=stylus
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [require('nib')()],
          import: ['~nib/lib/nib/index.styl']
        }
      }
    })
  ]
};