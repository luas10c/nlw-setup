const path = require('node:path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.json'],
          alias: {
            '#': path.resolve(__dirname, 'src')
          }
        }
      ]
    ]
  }
}
