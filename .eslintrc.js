module.exports = {
  // 해당 환경에서 정의된 함수, 전역변수를 사용할 수 있게 해줌.
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  // plugin package의 규칙을 그대로 따르고 싶을 때 plugin을 extends에 추가해준다.
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // rules page에 있는 체크표시된 모든 규칙들을 활성화한다.
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  // ESLint가 구문 분석을 위해 어떤 parser를 사용할지 결정 -> TS 구문 분석을 위해서는 아래 부분 설치 필요함.
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 다른 사람이 만든 규칙을 가지고 올 수 있다.
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {},
};
