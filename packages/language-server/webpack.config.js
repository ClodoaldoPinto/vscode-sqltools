const path = require('path');

const outdir = path.resolve(__dirname, '..', '..', '..', 'dist');

const babelOptions = require(path.join(__dirname, '.babelrc'));

module.exports = function getLanguageServerConfig(env) {
  let config = {
    name: 'languageserver',
    mode: env.production ? 'production' : 'development',
    target: 'node',
    entry: {
      languageserver: path.join(__dirname, 'index.ts')
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            { loader: 'babel-loader', options: babelOptions },
            { loader: 'ts-loader', options: { transpileOnly: true } }
          ],
        },
        {
          test: /\.js$/,
          use: [
            { loader: 'babel-loader', options: babelOptions },
          ],
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      alias: {
        'pg-native': path.join(__dirname, '../../' ,'node_modules/pg/lib/native/index.js'),
      },
      modules: [
        'node_modules',
        path.join(__dirname, '..', '..', 'node_modules')
      ],
    },
    output: {
      filename: '[name].js',
      path: outdir,
      libraryTarget: "commonjs",
      devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    },
    externals: {
      'sqlite3': 'commonjs sqlite3',
      'oracledb': 'commonjs oracledb',
    },
  };

  return config;
}
