module.exports = {
  env: {
    es2020: true,
    jest: true
  },
  extends: ['prettier'],
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error'
  }
}
