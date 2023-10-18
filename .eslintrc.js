module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbng',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  Parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    'no-undef': 'off',
    'array-callback-return': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'react/display-name': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-this-in-sfc': 'off',
    'react/no-unused-prop-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    camelcase: 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/no-danger': 'off',
  },
};
