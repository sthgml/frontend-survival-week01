# 개발 환경 총정리

## 1. Node.js 버전 관리

```bash
node -v
```

먼저 현재 내 로컬 환경에 설치되어 있는 node.js 버전을 확인한다.

그리고 fnm이라는 명령어를 사용하기 위해 fnm부터 설치를 해준다.(fnm이 설치되어 있는지 확인하려면 `fnm --version` 입력)

[fnm 깃허브 사이트](https://github.com/Schniz/fnm)

```bash
fnm ls-remote
```

이제 위 명령어를 입력하면 버전이 어디까지 나와있는지 알 수 있다. 이 외에는 ode.js 사이트에 들어가서 확인하는 방법도 있다.

그 중 가장 최근에 나온 짝수 버전이 LTS 버전이니 설치하면 된다.(작성일 2023/2/3 기준 18.14.0 LTS)

### 설치 명령어

```bash
fnm install --lts
```

### 설치된 상태 확인

```bash
fnm list
fnm current
```

최신 버전으로 노드를 업데이트 했다면 이제 프로젝트를 만들어보자

## npm 프로젝트 만들기

이 프로젝트는 타입스크립트를 개발환경으로 한 리액트 프로젝트이다.

우선 작업할 빈 폴더를 만들고 그 폴더를 열어준다.

프로젝트에 npm 패키지를 준비하는 것이 첫 번째 작업이다.

```bash
npm init -y
```

위 명령어를 입력하면 package.json 파일이 생긴다. -y는 질문들을 생략하겠다는 의미이다. 그리고 package.json 파일 안에는

```json
{
  "name": "frontend-survival-week01",
  "version": "1.0.0",
  "description": "프론트엔드 생존코스 1주차 과제",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/himyne/frontend-survival-week01.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/himyne/frontend-survival-week01/issues"
  },
  "homepage": "https://github.com/himyne/frontend-survival-week01#readme"
}
```

이렇게 기본적으로 프로젝트가 생성된다. 프로젝트 명(name), 설명(description), 저자(author) 등은 자유롭게 수정하면 된다.

main 파일이 index.js로 되어있는데 이 또한 원하는 파일로 시작할 수 있도록 바꿀 수 있다.

## gitignore 파일 만들기

node_modules나 dist는 커밋하는 것을 방지하기 위해 꼭 gitignore파일을 미리 만들어준다.

gitignore 사이트에 깃허브에 올라가면 안되는 파일들을 전부 모아둔 자료도 있으니 이걸 활용하는 것도 방법이다.

## TypeScript 세팅

이제 개발환경으로 쓸 TypeScript를 세팅해줄거다.

```bash
npm i -D typescript
```

먼저 프로젝트에 typescript를 설치해준다. package.json 파일에 devDependencies에 추가된 것을 볼 수 있다.

```bash
npx tsc --init
```

npx 명령어로 실행하면 프로젝트 폴더에 tsconfig.json 파일도 생성된다.
tsconfig.json 파일에서 jsx 속성을 `"jsx": "react-jsx"`로 변경해주면 타입스크립트 세팅은 끝났다.

## ESLint 설정

```bash
npm i -D eslint

npx eslint --init
```

eslint도 설치하고 실행한다.

```text
√ How would you like to use ESLint? 
> To check syntax, find problems, and enforce code style

√ What type of modules does your project use?
> JavaScript modules (import/export)

√ Which framework does your project use?
> React

√ Does your project use TypeScript?
> Yes

√ Where does your code run?
> Browser

√ How would you like to define a style for your project?
>  Use a popular style guide

√ Which style guide do you want to follow? 
> xo-typescript
√ What format do you want your config file to be in?
> JavaScript

√ Would you like to install them now?
> Yes

√ Which package manager do you want to use?
> npm
```

위처럼 질문에 모두 대답하면 .eslintrc.js 파일이 생성된다.

```javascript
//.eslintrc.js
module.exports = {
 env: {
  browser: true,
  es2021: true,
  jest: true,
 },
 extends: [
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  'xo',
  ],
  overrides: [
    {
      extends: [
        'xo-typescript',
      ],
      files: [
        '*.ts',
        '*.tsx',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
```

기존 파일에 `jest: true`와 `'plugin:react/jsx-runtime'`만 추가해주었다.

`.eslintignore`파일도 마찬가지로 작성한다.

```text
/node_modules/
/dist/
/.parcel-cache/
```

그리고 ts, js 파일을 저장할 때마다 ESLint를 실행하도록 `.vscode/settings.json` 파일을 추가하여 아래 내용을 작성한다.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## 리액트 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

-D 옵션을 붙이면 devDependencies에 추가되고 안붙이면 dependencies에 추가된다.

```json
"devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "@typescript-eslint/parser": "^5.50.0",
    "eslint": "^8.33.0",
    "eslint-config-xo": "^0.43.1",
    "eslint-config-xo-typescript": "^0.55.1",
    "eslint-plugin-react": "^7.32.2",
    "typescript": "^4.9.5"
  },

"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

## Jest & React Testing Library설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

설치하고 `jest.config.js`파일을 작성하여 swc를 사용하도록 해준다.
swc는 speedy web compiler의 약자로 테스트 속도를 빠르게 해준다고 한다.

```text
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
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

## Parcel 설치

```bash
npm i -D parcel
```

설치하고 pakage.json 파일에 `"source": "index.html"`을 추가해준다.
원래는 source 부분에 main이 들어가 있어서 바꿔주었다.

```json
  "name": "frontend-survival-week01",
  "version": "1.0.0",
  "description": "프론트엔드 생존코스 1주차 과제",
  "source": "index.html",
```

그리고 정적 폴더를 만들기 위해  `parcel-reporter-static-files-copy` 패키지를 설치해준다.

```bash
npm install -D parcel-reporter-static-files-copy
```

assets들을 저장할 static 폴더를 만들고 그 안에 `.parcelrc` 파일을 작성한다.

```text
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```
