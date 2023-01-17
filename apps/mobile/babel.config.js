const path = require('node:path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
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
