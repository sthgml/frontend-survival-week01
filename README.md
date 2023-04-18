# 개발환경 세팅

TypeScript + React + Jest + ESLint + Parcel 세팅(windows)

## 환경설정 전 준비

1. 프로젝트용 폴더 생성: `mkdir <프로젝트명>`

1. node.js 설치

아래 링크에서 직접 다운로드하거나 fnm으로 설치 가능(fnm이 더 빠름)

  1. 직접 다운로드: 최신 버전보다 안정된 버전 설치하기
  [node.js 다운로드](https://nodejs.org/ko)

  1. fnm 설치 코드

  ```bash
    fnm install --lts
    fnm list
  ```

1. vsCode 설치 후 vsCode에서 프로젝트 폴더 열기
[vsCode 다운로드](https://code.visualstudio.com/download)

1. vsCode에서 Terminal > new Terminal로 터미널창 열기

기본 설정이 powerShell로 되어있으면, 이후 명령어가 작동하지 않음. git bash로 변경하기
  git bash는 git을 설치해야만 생김
  [git 다운로드](https://git-scm.com/downloads)

## 프로젝트 환경설정

### 초기 설정

1. npm으로 필요한 패키지 다운로드

`npm init -y`: npm 패키지 준비
  init: 시작 / -y: 옵션 전부 yes를 의미

1. `.gitignore` 작성

node_modules을 git에 올리지 않도록 gitignore 파일을 만들기
  .gitignore 파일 생성(. 필수(숨겨진 파일이라는 의미)) : `touch .gitignore`
  하단 사이트에서 node.js 검색 후 .gitignore 파일에 복사 붙여넣기
  [gitignore 내용 자동으로 만들어주는 사이트](https://www.toptal.com/developers/gitignore)

### typescript 설정

1. typescript 설치: `npm i -D typescript`
1. typescript 설정 초기화: `npx tsc --init`
1. 생성된 tsconfig.json 파일에서 jsx 주석을 해제하고, 내용을 변경: `"jsx": "react-jsx"`

### eslint 설정

1. eslint 설치: `npm i -D eslint`
1. eslint 설정 초기화: `npx eslint --init`

설정은 아래와 같이 세팅

```text
Ok to proceed? (y)
```

```text
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
❯ XO

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now?
› Yes

? Which package manager do you want to use? …
❯ npm
```

1. .eslintrc.js 파일 수정

```javascript
extends: [
  'plugin:react/recommended',
  'plugin:react/jsx-runtime', //추가
  'xo',
],
```

1. .eslintignore 추가: `touch .eslintignore`
1. .eslintignore 작성

```text
/node_modules/
/dist/
/.parcel-cache/
```

### React 설치

react 설치: `npm i react react-dom` 후 `npm i -D @types/react @types/react-dom`

### jest 테스트 도구 설치

1. jest 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
  jest-environment-jsdom \
  @testing-library/react @testing-library/jest-dom
```

1. jest.config.js 파일을 작성

jest가 기본으로 swc와 typescript를 사용하지않기에 함께 사용하기 위해 작성
jest.config.js 파일 생성: `touch jest.config.js`

### parcel 설치

parcel 설치: `npm i -D parcel`
package.json에 scripts 명령어 넣기

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

package.json에 시작이 되는 파일 수정: `"main": "index.js",`를 `"source": "index.html",`로 수정 후 index.html 파일 생성

### 실행이 되도록 기본 파일 설정

1. src 폴더와 tsx 파일 생성

```bash
mkdir src
touch src/main.tsx
```

1. index.html 파일에 script 추가: `<script type="module" src="src/main.tsx"></script>`

1. main.tsx 파일 내용 추가

```typescript
import ReactDOM from 'react-dom/client';

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(<p>hello world!</p>);
}
```
