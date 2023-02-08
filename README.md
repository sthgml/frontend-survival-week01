# frontend-survival-week01

## 나만의 개발환경 만들기

### Node.js 설치

<https://nodejs.org/en/> 로 최신 버전 확인

홀수 버전은 최신의 개발과정에 있는 버전, 짝수는 최신의 안정적인 버전

계속 업그레이드되는 Node.js로 프로젝트를 진행하다 보면 프로젝트마다 서로 다른 버전을 사용하는 경우가 있다.
그래서 여러 버전의 Node.js를 설치해서 사용하고 싶을 때가 있는데,
기존엔 nvm를 사용하였지만 최근 fmm(Fast Node Manager)을 사용한다.

fmm은 macOS에서 brew로 설치할 수 있다.

```bash
brew install fnm
```

fmm에서 설치가능한 Node 버전

```bash
fnm ls-remote
```

최신버전을 설치

```bash
fnm install --lts
```

설치 확인은

```bash
fnm list
fnm current
```

### npm 프로젝트 만들기

![Node](https://img.shields.io/badge/nodejs-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white)
![Parcel](https://img.shields.io/badge/parcel-21374b.svg?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Typescript](https://img.shields.io/badge/typescript-3178c6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/jest-C21325.svg?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLINT-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)

#### 프로젝트 폴더 생성

```bash
mkdir my-app
cd my-app
fnm use default
echo "$(fnm current)" > .nvmrc
```

fmn use를 통해 프로젝트에서 사용하는 Node버전을 사용할 수 있다.

또는 .nvmrc 파일을 확인함으로써 어떤 버전으로 개발했는지 알 수 있다.

```bash
cat .nvmrc
```

### gitignore 파일 만들기

node_modules나 dist는 용량이 크기때문에 적어도 이 둘은 꼭 넣어준다.

구글 gitignore 검색해서 만들어주는 사이트 가서 node로 검색 후 설정을 가져오거나
GitHub gitinore node 검색해서 넣어준다.

### 프로젝트 초기화

다음 명령을 실행하고 질문에 답함으로써 package.json 파일을 자동으로 생성한다.

```bash
npm init
```

### package.json

### ESLint 설치

```bash
npm install --save-dev eslint
```

eslintrc.js 생성

```bash
npx eslint --init
```

eslintrc.js init시 질문

```bash

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · tab
✔ What quotes do you use for strings? · double
✔ What line endings do you use? · unix
✔ Do you require semicolons? · No / Yes
The config that youve selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now?
> No / Yes
✔ Which package manager do you want to use?
> npm
Installing eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest

```

.eslintrc.js 파일을 열어 rules를 수정, 추가한다. Airbnb JavaScript Style Guide 같은 널리 알려진 스타일 가이드를 사용하고 싶다면 간단히 eslint-config-airbnb 확장을 설치해서 사용하면 된다.

```javascript
    // 공백 4칸에서 공백 2칸으로 변경.
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 2],

    // 줄 끝 공백 항상 제거.
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // 블록 중괄호 항상 사용.
    // https://eslint.org/docs/rules/curly
    'curly': 'error',

    // 중괄호 스타일 맞춤.
    // https://eslint.org/docs/rules/brace-style
    'brace-style': 'error',

    // 공백이 필요하면 하나만 들어게 한다.
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // 연산자 앞뒤에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // 단항 연산자가 단어면 사이에 공백이 들어가게 하고, 기호면 공백을 제거.
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'error',

    // 속성 앞 공백 제거.
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // 함수 호출을 위한 소괄호는 반드시 붙여서 쓰게 한다.
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'error',

    // 블록 앞에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // if, else 등 키워드 앞뒤에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', { 'before': true, 'after': true }],

    // 쉼표 뒤에만 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { 'before': false, 'after': true }],

    // 여러 줄로 여러 요소를 표현할 때 줄 마지막에 쉼표가 들어가게 한다.
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // 여러 줄로 여러 요소를 표현할 때 마지막 줄 끝에도 쉼표가 들어가게 한다.
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // 소괄호 안에 공백이 들어가지 않게 한다.
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // 블록 중괄호 안에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'error',

    // Array 리터럴 대괄호 안에 공백이 들어가지 않게 한다.
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Object 리터럴 중괄호 안에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Key-Value 구분을 위한 콜론 뒤에만 공백을 넣는다.
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { 'mode': 'strict' }],

    // Arrow Function 기호 앞 뒤에 공백이 들어가게 한다.
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
```

생성된 .eslintrc.js에 env: {jest: true}, extends에 'plugin:react/jsx-runtime'를 추가해준다.

.eslintrc.js 파일 자체를 ESLint 설정에 맞추고 싶다면 다음을 실행한다.

```bash
npx eslint --fix --no-ignore .eslintrc.js
```

### Typescript 설정

```bash
npm i -D typescript

npx tsc --init
```

생성된 tsconfig.json 에서 "jsx": "react-jsx" 를 설정해준다.

### Jest와 SWC로 테스트 환경 구축

관련 패키지 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

Jest 환경 설정 파일 생성.

```bash
touch jest.config.js
```

jest.config.js 파일 작성.

```javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
```

### React 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### Parcel 설치

```bash
npm i -D parcel
```

설치 후 package.json 에 `source: "index.html"`를 추가해준다.

정적 폴더를 위해 parcel-reporter-static-files-copy 패키지를 설치한다.

```bash
npm install -D parcel-reporter-static-files-copy
```

assets들을 저장할 static 폴더를 만든다.

.parcelrc 파일을 생성후 아래 내용을 작성한다.

```javascript
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```
