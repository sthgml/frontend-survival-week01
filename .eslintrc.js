module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'xo', 'plugin:react/jsx-', 'xo'],
  overrides: [
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': 'never',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vars-on-top': 'off',
    'no-underscore-dangle': 'off', // var _foo;
    'comma-dangle': 'off',
    'func-names': 'off', // setTimeout(function () {}, 0);
    'prefer-template': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'], // disallow specified syntax(ex. WithStatement)
    'prefer-arrow-callback': 'error', // Require using arrow functions for callbacks
    'require-await': 'error',
    'arrow-parens': ['error', 'as-needed'], // a => {}
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true, // a || b
        allowShortCircuit: true, // a ? b : 0
        allowTaggedTemplates: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
