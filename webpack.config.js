const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'FUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}

// const path = require('path');
// module.exports = {
//   node: 'production',
//   entry: {
//     index: './lib/index.tsx'
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist/lib'), // 路径
//     library: 'FUI',
//     libraryTarget: 'umd', // 库的类型
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: 'awesome-typescript-loader'
//       }
//     ]
//   }
// }