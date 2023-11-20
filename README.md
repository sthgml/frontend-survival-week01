# frontend-survival-week01

프론트엔드 생존코스 1주차 과제  

## 프론트엔드 개발환경 세팅

### 0. Node.js 설치

```bash
brew install fnm # node 관리를 위한 fnm 설치

fnm install --lts # lts 버전 node를 설치

node -v # 현재 설정된 node 버전 확인
```

### 1. 기본 npm 시작

```bash
npm init -y # 중간에 선택지를 모두 yes로 통일
```

### 2. gitignore 설정

깃허브에서 제공하는 [탬플릿](https://github.com/github/gitignore)을 사용하면 편하다.  
아니면 최소한 `node_module`와 `dist`만이라도 추가를 해놓는게 좋다.

### 3. TypeScript 설치 및 설정

타입스크립트는 개발환경에서만 사용하므로 -D 옵션을 사용하여 설치한다.  

```bash
npm i -D typescript
```

타입스크립트 컴파일에 필요한 설정파일인 `tsconfig.json`을 생성한다.

```bash
npx tsc --init
```

기본적으로 설정된 세팅을 따라가지만, jsx옵션만 우선 설정한다.  

```json
  "jsx": "react-jsx" /* Specify what JSX code is generated. */,
```

### 4. ESLint 설치 및 설정

정적 코드분석기 ESLint를 설치한다.  
설치 이후에는 초기세팅을 진행한다.

```bash
npm i -D eslint

# eslint --init 으로 eslint 세팅. .eslintrc.js 파일 생성
npx eslint --init
✔ How would you like to use ESLint? # syntax + problem + style
✔ What type of modules does your project use? # JavaScript modules (import/export)
✔ Which framework does your project use? # react
✔ Does your project use TypeScript? # Yes
✔ Where does your code run? # browser
✔ How would you like to define a style for your project? # guide
✔ Which style guide do you want to follow? # xo-typescript
✔ What format do you want your config file to be in? # JavaScript
✔ Would you like to install them now? # Yes
✔ Which package manager do you want to use? # npm
```

테스팅 도구로 jest를 사용하기 때문에 .eslintrc.js에 미리 설정을 추가한다.  
React 17버전 이후로 `Import React from 'react';` 없이도 문제없이 코드를 작성할 수 있다.  
ESLint는 별도의 설정없이는 이를 에러로 판단하기 때문에 거슬릴 수 있다.  
해결하기 위해 `.eslintrc.js`에 rule을 추가한다.

```javascript
module.exports = {
 env: {
  browser: true,
  es2021: true,
  jest: true, // jest 설정 추가
 },
 ...
 plugins: ['react'],
 rules: {'react/react-in-jsx-scope': 'off'}, // rule 추가
};

```

`.eslintignore`도 `gitignore`와 유사하게 설정이 필요하다.  
귀찮다면 똑같이 복붙해도 큰 문제는 없다.

만약 vscode사용하면서 저장할때 자동으로 린팅하고 싶다면 `setting.json`에 아래 내용을 추가한다.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

### 5. 리액트 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### 6. Jest 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom@5.16.4
```

Jest는 기본적으로 타입스크립트를 사용하지 않는다.  
`jest.config.js`파일을 만들고 swc와 타입스크립트를 사용하도록 아래와 같이 설정을 잡아준다.

```javascript
module.exports = {
 testEnvironment: 'jsdom',
 setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
 transform: {
  '^.+\\.(t|j)sx?$': [
   '@swc/jest',
   {
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
   },
  ],
 },
 testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
```

### 7. Parcel 설치 및 세팅

```bash
npm i -D parcel

# 정적파일 서빙을 위한 추가 패키지
npm install -D parcel-reporter-static-files-copy 
```

`.parcelrc` 파일을 생성하고 설정을 추가한다.  
아래 설정을 추가하여 `static` 폴더내 정적 파일을 사용할 수 있다.

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

```html
<!-- 사용 예시 -->
<img src="images/sample.jpg" alt="sample" width="200" />
```

### 8. package.json 파일 수정

Parcel로 빌드하고 정적 서버를 실행시킬것이기 때문에 약간의 세팅이 필요하다.

```json
"source": "./index.html", // package.json의 main을 source로 변경
```

`package.json` 에서 터미널로 편하게 실행할 수 있는 몇가지 스크립트를 추가한다.

```json
{
  ...
  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
  ...
}
```
