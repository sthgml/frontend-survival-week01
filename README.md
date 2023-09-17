# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 개발 환경 설정하기
### 1. 시작하기
```sh
npm init
npm init -y
```
#### .gitignore 쉽게 만들기
https://www.toptal.com/developers/gitignore/
### 2. 타입스크립트

타입스크립트는 자바스크립트에 타입을 부여한 언어

```sh
npm i -D typescript
```
#### 실행(컴파일)
```sh
npx tsc --init
```
- tsconfig.json 파일로 설정
### 3.lint
린트는 소스코드를 분석하여 문법적인 오류나 스타일적인 오류, 적절하지 않은 구조 등에 표시를 달아주는 행위
다른 사람과 협업을 할 때 코드의 형식을 맞추는데 도움을 준다.

```sh
npm i -D eslint
```
- .eslintrc.js 파일을 생성 후 설정
- .eslintignore 파일 생성 후 설정
### 4. 리액트 설치
```sh
npm i react react-dom
npm i -D @types/react @types/react-dom
```
### 5. 테스팅 라이브러리
```sh
npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom  @testing-library/react @testing-library/jest-dom
```

- jest.config.js 파일 설정
  - 테스트에서 SWC 사용

```javascript
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
### 6. parcel
```sh
npm i -D parcel
```
### 7. package.json

parcel로 웹 서버를 띄워주기 때문에 source 추가

```json
"source": "index.html",
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
### 8. 기본 파일 작성
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/App.test.tsx`
- `src/components/Greeting.test.tsx`
- `src/components/Greeting.tsx`
#### 기본 작성
#### 1. index.html
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Demo App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```
#### 2. main.tsx
```typescript
import ReactDOM from 'react-dom/client';

function App() {
	return <p>Hello, World!</p>;
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App />);
}
```