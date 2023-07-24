# 계속 써먹는 환경 설정 만들기

```console
Q1. 프론트엔드 개발 환경 설정 방법을 모아둔 README.md를 작성해주세요.
```

## 1. Node.js 환경 설정하기

### Node 설치하기

```console
// Node Manager 설치 (FNM)
$ curl -fsSL https://fnm.vercel.app/install | bash

// FNM 설치 확인
$ fnm --version

// Node 설치 (LTS 버전)
$ fnm install --lts

// LTS 버전 적용
$ fnm use lts-latest

// Node 버전 확인
$ node -version
```

> Tip) 각 패키지가 설치되고 확인을 하고싶으면 다음 명령어를 사용한다.

```console
// 
$ fnm ls
```

### 프로젝트 생성하기

```console
// 프로젝트 생성 및 진입
$ mkdir my-app
$ cd my-app

// Node Package Manager 설치 (NPM)
$ npm init

// Git 설정
$ git init
$ git add .
$ git commit -m "Project Init"
$ git branch -M main
$ git remote add origin git@github.com:{계정}/{프로젝트 이름}.git
$ git push -u origin main
```

### Module Bundler 설정하기 (with Parcel)

Parcel Docs

* <https://ko.parceljs.org/getting_started.html>

```console
// Parcel 설치
$ npm install -D parcel
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
</head>
<body>
    <script type="module" src="./script.js"></script>
</body>
</html>
```

```js
// script.js

alert("화면에 얼럿이 보이나요?");
```

```console
// Parcel 로 index.html 실행
$ npx parcel index.html

// Server running at http://localhost:1234
```

### TypeScript 설정하기

```console
// TypeScript 설치
$ npm install --save-dev typescript

// TypeScript 설정 파일 생성 (tsconfig.json)
$ npx tsc --init
```

Parcel with TypeScript

* <https://ko.parceljs.org/typeScript.html>

```ts
// src/script.ts

alert('TypeScript 로 작성한 얼럿도 보이나요?');
```

```html
<body> 
    <!-- 추가 -->
    <script type="module" src="./src/script.ts"></script> 
</body>
```

```console
// Parcel 로 index.html 실행
$ npx parcel index.html
```

### ESLint 설정하기

```console
// ESLint 설치
$ npm install -D eslint

// ESLint 설정 파일 생성 (.eslintrc)
$ npx eslint --init
```

### React 설치하기

```console
// React 설치
$ npm install react react-dom
$ npm install --save-dev @types/react @types/react-dom
```

Parcel With React

* <https://parceljs.org/recipes/react/>

```html
<!-- React 가 렌더링할 루트 요소를 생성해줍니다. -->

<body>
    <div id="root"></div>

    <script type="module" src="src/index.tsx"></script>
</body>
```

```tsx
// index.tsx

import ReactDOM from 'react-dom/client';

// 요소를 선택해서 root 요소로 지정한다.
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

// root.render() 로 <App /> 컴포넌트를 렌더링한다.
root.render(<App />);
```

```tsx
// App.tsx
import React from 'react';

const App = () => {
  return (
    <div>.jsx 형식의 App 컴포넌트입니다. 화면에 보이나요?</div>
  )
}

export default App;
```

```console
// Parcel 실행
$ npx parcel index.html
```

### Testing 설정하기 (Jest + React Testing Library)

Jest Docs

* <https://jestjs.io/docs/getting-started>

React Testing Library Docs

* <https://testing-library.com/docs/react-testing-library/intro/>

SWC Docs

* <https://swc.rs/docs/getting-started>

```console
// Jest 설치
$ npm install -D jest @types/jest

// React Testing Library 설치
$ npm install -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom

// SWC 설치
$ npm install -D @swc/core @swc/jest
```

```conosole
// Jest 설정 파일 생성 (jest.config.ts)
$ npx jest --init
```

```tsx
// src/tests/App.test.tsx

import React from 'react';

import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
    it("'App 컴포넌트입니다. 화면에 보이나요?' 라는 텍스트가 잘 보여야한다.", () => {
        render(<App />);

        screen.findByText("App 컴포넌트입니다. 화면에 보이나요?");
    })
})
```

```console
// npm scripts 실행
$ npm run test
```

```console
Q2. 강의에 나온 의존성들(Dependencies)을 설치하고, 설정파일들을 빠짐 없이 생성하고, 동일하게 작성해주세요.
```
