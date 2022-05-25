const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: { index: './src/index.ts' },
  devtool: 'inline-source-map',
  mode: NODE_ENV,
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === 'development',
  plugins: [
    new WebpackShellPluginNext({
      onBuildExit: { scripts: ['npm run serve:dev'], blocking: false, parallel: true },
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
