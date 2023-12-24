module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        'xo',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    settings: {
        'import/resolver': {
            node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        indent: ['error', 2],
        'no-trailing-spaces': 'error',
        curly: 'error',
        'brace-style': 'error',
        'no-multi-spaces': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'no-whitespace-before-property': 'error',
        'func-call-spacing': 'error',
        'space-before-blocks': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        'space-in-parens': ['error', 'never'],
        'block-spacing': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'key-spacing': ['error', { mode: 'strict' }],
        'arrow-spacing': ['error', { before: true, after: true }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/*.test.js',
                '**/*.test.jsx',
                '**/*.test.ts',
                '**/*.test.tsx',
            ],
        }],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        }],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
    },
}
