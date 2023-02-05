# React + TypeScript + Parcel

## 실행만 해보기

```shell
npm start  
```

## 처음부터 따라하기

### npm 프로젝트 생성

```shell
npm init -y  
```

### 잊지말고 .gitignore

```shell
touch .gitignore
```

```.gitignore
/node_modules/
/dist/
/.parcel-cache/
```

### TypeScript 세팅

```shell
npm i -D typescript  
npx tsc --init  
```

tsconfig.json 에서 수정

```json
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}
```

### ESLint 세팅

```shell
npm i -D eslint  
npx eslint --init
```

.eslintrc.js 에서 수정

```js
module.exports = {
  env: {
    // ...(전략)...
    jest: true,
  },
  extends: [
    // ...(전략)...
    'plugin:react/jsx-runtime',
    // ...(후략)...
  ],
  // ...(후략)...
};
```

공부한것과 비교했을때 이 두가지를 추가했는데  
extends는 정확하게 찾아봐야할 듯  

### 잊지말고 .eslintignore

```shell
touch .eslintignore
```

```.eslintignore
/node_modules/
/dist/
/.parcel-cache/
```

### React 세팅

```shell
npm i react react-dom  
npm i -D @types/react @types/react-dom
```

### 테스트 도구 설치

```shell
npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom 
npm i -D @testing-library/react @testing-library/jest-dom  
touch jest.config.js
```

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', //는 사실 설치를 위에서 하긴 함
    './jest.setup', //이건 안쓴다 지워
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          jsx: true,
          decorators: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};
```

### Parcel 세팅

```shell
npm i -D parcel
touch .parcelrc.json
```

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

package.json

```json
  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build", 
    "check": "tsc --noEmit", 
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
```

### vscode 세팅

```shell
mkdir .vscode  
touch .vscode/settings.json  
```

```json
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

### html, js 기본환경세팅

```shell
touch index.html
```

```html
<body>
  <p>Hello, world!</p>
  <script type="module" src="./src/main.tsx"></script>
</body>
```

```shell
mkdir src
touch src/main.tsx
```
