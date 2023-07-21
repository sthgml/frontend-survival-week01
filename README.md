# 계속 써먹는 환경 설정 만들기

**`TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅`**

#### 작업 폴더 준비

```bash
mkdir my-app

cd my-app
```

#### 터미널에서 vscode 열기

```bash
code .
```

#### npm 패키지 생성

```bash
npm init -y
```

-y 옵션은 세부 설정 질문에 모두 yes처리함

#### .gitignore

```bash
touch .gitignore
```

.gitignore -> node_modules/ 추가

github 저장소에 node_modules 올라가지 않도록 ignore

#### TypeScript 설치, 설정

```bash
npm i -D typescript

npx tsc --init
```

npx tsc --init 명령어 입력 시 기본적인 설정이 추가된 tsconfig.json 생성

#### ESLint 설정

```bash
npm i -D eslint

npx eslint --init
```

npx eslint --init의 세부 설정 작업 진행 후 .eslintrc.js 파일이 생성되는데 jest도 linting하기 위해 env: { jest: true } 추가

#### .eslintignore

```bash
/node_modules/
/dist/
/.parcel-cache/
```

해당 링크는 프로젝트에 맞는 gitignore 설정을 도와준다. [gitignore.io](https://www.toptal.com/developers/gitignore)

#### React 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

#### 테스팅 도구 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

#### 테스트에서 SWC를 사용할 수 있도록 설정

```bash
touch jest.config.js

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup',
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

transform속성은 Jest가 JS에 대해서만 테스팅이 가능하므로 ts, tsx 확장자의 경우 JS로 컴파일하고 JS의 ES6+ 문법을 ES5로 트랜스파일하는 코드 전처리기로 swc를 사용하겠다는 의미다.

#### Parcel 설치

```bash
npm i -D parcel
```

#### package.json 수정

```bash
"source": "./index.html",
"scripts": {
  "start": "parcel --port 8080",
  "build": "parcel build",
  "check": "tsc --noEmit",
  "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
  "test": "jest",
  "coverage": "jest --coverage --coverage-reporters html",
  "watch:test": "jest --watchAll"
}
```

Parcel로 개발 서버를 실행할 때 `"source": "./index.html",` 속성이 index.html을 진입점(entry point)으로 설정한다.

`tsc --noEmit`의 `--noEmit` 옵션은 오류를 검사하고 컴파일 결과만을 확인하고, 변환된 JavaScript 파일은 생성하지 않는다.

`jest --watchAll`의 `--watchAll` 옵션은 jest 테스팅시 모든 파일을 감시하고, 변경이 감지되면 자동으로 다시 테스트한다.

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

`<div id="root"></div>` 엘리먼트는 리액트 최상위 컴포넌트를 렌더링하는 역할을 한다.

#### src/main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
 return (
  <div>
   hello world!
  </div>
 );
}

function main() {
 const element = document.getElementById('root');

 if (!element) {
  return;
 }

 const root = ReactDOM.createRoot(element);
 root.render((<App />));
}

main();
```

**`npm start로 개발 서버 실행`**
