# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## npm 프로젝트 생성

``` bash
  mkdir folderName
  cd folderName
  npm init -y
```

## TypeScript 세팅

```bash
npm i -D typescript
npx tsc --init
```

> npx(node pack) : 모듈을 로컬에 저장하지 않고, 매번 최신 버전의 파일만을 임시로 불러와 실행 시킨 후에, 다시 그 파일은 없어지는 방식

```json
  //tsconfig.json

  // ...(전략)...
  "jsx": "react-jsx", /* Specify what JSX code is generated. */
  // ...(후략)...
```

주석되어있던 jsx 라인을 주석을 해제

```json
  //package.json
  {
    "scripts" : {
      "check" : "tsc --noEmit"
    }
  }
```

TypeScript 컴파일을 통해 문법오류를 확인할수 있는 check 명령을 package.json에 추가

## ESLint 세팅

ESLint는 코딩 컨벤션에 위배되는 코드나 안티 패턴을 자동 검출하는 도구

```bash
npm i -D eslint
npx eslint --init

? How would you like to use ESLint? …
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)

? Which framework does your project use? …
❯ React

? Does your project use TypeScript?
› Yes

? Where does your code run? …
✔ Browser

? How would you like to define a style for your project? …
❯ Use a popular style guide

? Which style guide do you want to follow? …
❯ XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
› Yes

? Which package manager do you want to use?
> npm
```

이전에는 Airbnb가 있었으나, 지금은 없어져서, xo로 셋팅

```javascript
// .eslintrc.js

module.exports = {
  // ...(전략)...
  extends: [
    'xo',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  // ...(중략)...
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
};
```

### eslintignore 세팅

```bash
/node_modules/
/dist/
```

## React 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

리액트 설치 후, 리액트 기본 코드를 작성한다.

```bash
mkdir src
touch src/index.tsx
touch src/App.tsx
```

```tsx
// src/App.tsx
export default functionm App() {
  return (
    <p>Hello, world!</p>
  )
}
```

```tsx
// src/index.tsx
import ReactDOM from 'react-dom/client';
import App from './App';

const element = document.getElementById('root');

if (element) {
 const root = ReactDOM.createRoot(element);
 root.render(<App/>);
}
```

## Jest(테스팅 도구) 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom  @testing-library/react @testing-library/jest-dom
```

```javascript
//jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  transform: {
  '^.+\\.(t|j)sx?$': ['@swc/jest', {
   jsc: {
    parser: {
     syntax: 'typescript',
     jsx: true,
    },
    transform: {
     react: {
      runtime: 'automatic',
     },
    },
   },
  }],
 },
  moduleNameMapper: {
  '^src/(.*)$': '<rootDir>/src/$1',
 },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};


// jest.setup.js
import '@testing-library/jest-dom'
```

```javascript
//.eslintrc.js
module.exports = {
  env: {
    // ...(전략)...
    jest: true,
  },
  // ...(후략)...
};
```

```json
//package.json
{
  "scripts": {
    // ...(전략)...
    "test": "jest"
  }
}
```

```bash
npm test
```

npm test를 통해 jest 실행

## Parcel 설치

모듈 번들러 : 자바스크립트 파일들을 최적화, 압축하여 하나 혹은 여러개의 static 파일로 빌드해 주는 컴파일러

```bash
npm i -D parcel
```

```json
//package.json
{
  "scripts" : {
    "start" :  "parcel index.html --port 8080",
    // ...(후략)...
  }
}
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Sample</title>
</head>
<body>
  <div id="app">
    Loading...
  </div>
  <script type="module" src="./src/index.tsx"></script>
</body>
</html>
```

```bash
npm start
```

npm start를 이용하여 React Project 실행

## GitIgnore 세팅

```bash
/node_modules/
/dist/
/.parcel-cache/
```

### 쉽게 gitignore 생성하는 방법

1. toptal gitignore 생성기 사용
<https://www.toptal.com/developers/gitignore>

2. github gitignore repository 사용
<https://github.com/github/gitignore>
<https://github.com/github/gitignore/blob/main/Node.gitignore>

## VsCode 셋팅

jest, trailing Extension 설치

```json
// setting.json
{
    "editor.rulers": [
        80
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "trailing-spaces.trimOnSave": true
}
```
