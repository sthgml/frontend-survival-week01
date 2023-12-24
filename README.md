# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 계속 써먹는 환경설정 총정리
### 1. 패키지 설치를 위한 node 시작하기
1. 노드를 설치한다.   
    [nodejs.org](nodejs.org)
2. 터미널로 설치가 잘 되었는지 확인  
  `node -v`
2. 작업을 시작할 폴더를 생성한다. (대문자 금지)  
  `mkdir my-app`
3. 폴더 안으로 이동한다. (m치고 tab하면 자동완성됨)   
  `cd my-app`
4. node package manager 사용을 시작한다.  
  `npm init` => 질문폭격  
  `npm init -y` => 다 yes로 대답
### 2. 패키지 설치
#### 0. .gitignore 작성
1. .gitignore파일을 만든다.  
  `touch .gitignore`
2. [.gitignore Gernerator](https://www.toptal.com/developers/gitignore/api/node,react,macos)의 도움을 받아 내용물을 채운다.
3. 최소한  
`node_modules` 와   
`dist`는 넣자.
#### 1. TypeScript
1. dev 디펜던시로 타입스크립트를 install
`npm i -D typescript`
`npx tsc --init`
2. tsconfig.json 파일 수정
- `jsx` 파트에 주석되어있는 것을 풀고,
- `"preserve"`를 `"react-jsx"`로 수정
#### 2. React
- `npm i react`
- `npm i react-dom`
- `npm i -D @types/react @types/react-dom`
#### 3. JEST + swc
- jest 설치
- ```
  npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom@5.16.4
  ```
- jest.config.js 만들기
- ```
  module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      './jest.setup',
      '<rootDir>/jest-setup.js',
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
#### 4. Parcel & ESLint
1. eslint를 설치한다.  
`npm i -D eslint`  
`npx eslint --init`  
2. .eslintrc.js 파일을 수정한다.
```
  env: {
    jest: true
  }
```
3. .eslintignore 파일을 작성한다.
gitignore파일과 똑같이 작성해도 ok
4. parcel을 설치한다.
`npm i -D parcel`
5. package.json 에 npm 단축 명령어 만들기
- ```
  "start": "parcel --port 8080",
  "build": "parcel build",
  "check": "tsc --noEmit",
  "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
  "test": "jest",
  "coverage": "jest --coverage --coverage-reporters html",
  "watch:test": "jest --watchAll"
  ```
#### 5. 기본 파일 생성
- `index.html`
  - package.json 파일 수정
      ```
      "main": "index.js", // 노드에서 실행할 경우
      =>
      "source": "index.html", // 웹서버에서 실행할 경우
      ```
  - index.html 내부 채우기
  - `<body></body>` 하단에 `<script type="module" src="./src/main.tsx"></script>` 추가
    - ```
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ㅎㅇ</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="./src/main.tsx"></script>
      </body>
      </html>
      ```
- src폴더 만들기
  - `src/main.tsx`
    - ```
      import ReactDOM from "react-dom/client";

      import App from "./App";

      const element = document.getElementById('root');

      if (element) {
        const root = ReactDOM.createRoot(element);
        root.render(<App />)
      }

      ReactDOM.createRoot
      ```
  - `src/App.tsx`
    - ```
      import ReactDOM from "react-dom/client";

      import App from "./App";

      const element = document.getElementById('root');

      if (element) {
        const root = ReactDOM.createRoot(element);
        root.render(<App />)
      }

      ReactDOM.createRoot
      ```
- `src/App.test.tsx`
- `src/components/Greeting.test.tsx`
- `src/components/Greeting.tsx`