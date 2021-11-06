module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    extends: [
      'react-app',
      'airbnb',
      'plugin:jsx-a11y/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['jsx-a11y', 'prettier'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
      'prettier/prettier': [],
      'functional/no-let': 'error',
    },
  },
}
