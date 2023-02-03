# frontend-survival-week01

## 프론트엔드 생존코스 1주차 과제 계속 써먹는 환경 설정 만들기

### node.js 버전을 관리할 수 있는 fnm 설치

설치

```bash
brew install fnm
```

설치 가능한 버전 확인

```bash
fnm ls-remote
```

fnm으로 node.js 설치

```bash
fnm install --lts
```

사용 버전 변경 및 기본값 설정

fnm env 설정

```bash
vim ~/.zshrc
```

i 입력 후 다음을 삽입 후 esc -> :wq 입력 하면 저장

```bash
eval "$(fnm env --use-on-cd)"
```

프로파일을 새로 로드

```bash
source ~/.zshrc
```

```bash
fnm use lts-latest
fnm default $(fnm current)
```

설치된 버전 확인

```bash
fnm list
fnm current
```

### 작업 폴더 생성 package.json설치

폴더 생성

```bash
mkdir my-app
```

package.json 설치 -기본값으로 설치 후 추후 파일변경 가능

```bash
npm init -y
```

### gitignore 파일 설치

[gitignore](https://www.toptal.com/developers/gitignore) 사이트에서 설정을 만들어서 사용할 수 있다.

```bash
touch .gitignore
```

### 타입스크립트 셋팅

타입스크립트 설치

```bash
npm i -D typescript
```

타입스크립트 셋팅 실행

- 실행하면 tsconfig.json 파일이 생성된다.

```bash
npx tsc --init
```

tsconfig.json 파일에서 다음을 찾아 주석을 제거한다.

```json
// 위에껄 찾아서
"jsx": "preserve"
// 아래껄로 변경
"jsx": "react-jsx"
```

### ESLint 설정

ESLint 설치

- eslint-config-airbnb-base : Airbnb의 style guide를 eslint의 설정 파일인 .eslintrc.json
  에 확장해주는 플러그인(React 관련 플러그인 미포함)
- eslint-plugin-import : ES6+ import/export 지원 플러그인
- eslint-plugin-html : HTML 파일에 포함된 인라인 자바스크립트 지원 플러그인

```bash
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-html
```

[ESLint VSCode extention][2] 설치
[2]:(https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

메뉴의 Code > 기본 설정 > 설정으로 이동하여 setting.json에 아래 설정을 추가한다.

```json
// ESLINT
  "eslint.validate": ["html", "javascript", "javascriptreact", "typescript", "typescriptreact"],
  "eslint.alwaysShowStatus": true,
```

.eslintrc.json 파일 생성

```json
touch .eslintrc.json
```

.eslintrc.json 파일 설정

```json
{
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es2022": true,
    "jest": true
  },
  "globals": { "_": true },
  "plugins": ["import", "html"],
  "extends": "airbnb-base",
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    // "no-var": "off",
    "no-console": "warn",
    "no-plusplus": "off",
    "no-shadow": "off",
    "vars-on-top": "off",
    "no-underscore-dangle": "off", // var _foo;
    "comma-dangle": "off",
    "func-names": "off", // setTimeout(function () {}, 0);
    "prefer-template": "off",
    "no-nested-ternary": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
    // disallow specified syntax(ex. WithStatement)
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "prefer-arrow-callback": "error", // Require using arrow functions for callbacks
    "require-await": "error",
    "arrow-parens": ["error", "as-needed"], // a => {}
    "no-param-reassign": ["error", { "props": false }],
    "no-unused-expressions": [
      "error",
      {
        "allowTernary": true, // a || b
        "allowShortCircuit": true, // a ? b : 0
        "allowTaggedTemplates": true
      }
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ] // prettier의 printWidth 옵션 대신 사용
  }
}
```

[Prettier extention][1] 설치

[1]: (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

메뉴의 Code > 기본 설정 > 설정으로 이동하여 setting.json에 아래 설정을 추가한다.

```json
// Prettier
  "singleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "avoid",
  "printWidth": 120,
  "editor.formatOnSave": true,
```

TypeScript 고유의 문법을 파싱하기 위해 @typescript-eslint/parser를 사용해야 한다.

설치

```bash
npm install --save-dev typescript @typescript-eslint/parser
```

.eslintrc.json 에 parser를 설정

```json
"parser": "@typescript-eslint/parser",
```

### React 설정

설치

```bash
npm i react react-dom
// 타입스크립트 설정
npm i -D @types/react @types/react-dom
```

### Jest 설정

설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

jest.config.js 생성

```json
touch jest.config.js
```

jest.config.js 설정

```bash
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

### parcel 설정

설치

```bash
npm i -D parcel
```

설정을 위해 package.json을 수정

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

정적파일 Serving 설정

설치

```bash
npm i -D parcel-reporter-static-files-copy
```

.parcelrc 파일 생성

```bash
touch .parcelrc
```

.parcelrc 파일 설정

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-static-files-copy"]
}
```
