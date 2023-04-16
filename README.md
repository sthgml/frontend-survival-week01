# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## JavaScript (Node.js)

Node.js 환경 설정을 해야 한다.

* [Node.js](https://nodejs.org/ko) 에서 최신 버전 확인하기
* [fnm (Fast Node Manager)](https://github.com/Schniz/fnm)
  * 프로젝트마다의 Node.js 버전 관리하기에 유용한 도구
  * Windows는 [Scoop](https://scoop.sh/) 또는 [Chocolatey](https://chocolatey.org/)를 먼저 설치하고 fnm을 설치할 수 있다.

## TypeScript

1. 프로젝트 폴더 준비

``` bash
mkdir app-pjt
cd app-pjt
```

2. npm 패키지 준비

``` bash
npm init -y
```

3. .gitignore 파일 작성 👉 [github 샘플 참고](https://github.com/github/gitignore)

4. 타입스크립트 설정

``` bash
npm i -D typescript
npx tsc --init
```

5. tsconfig.json 파일의 jsx 속성 변경 👉 주석 변경

```json
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx",
    // ...(후략)...
  }
}
```

6. ESLint 설정

``` bash
npm i -D eslint
npx eslint --init
```

👇 eslint 설정 참고 👇

```
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? ...
> React
  Vue.js
  None of these

? Does your project use TypeScript? » Yes 

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
  Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style

? Which style guide do you want to follow? ...
  Standard: https://github.com/standard/eslint-config-standard-with-typescript
> XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON

? Would you like to install them now? » Yes

? Which package manager do you want to use? ... 
> npm
  yarn
  pnpm
```

7. .eslintrc.js 파일 수정

jest: true 잡아주면 좋고 rules에 본인 취향 코드 룰 추가하면 좋다

```json
 env: {
  jest: true,
 },
  rules: {
    indent: ['error', 2],
  },
```

8. .eslintignore 파일 작성

```
/node_modules/
/dist/
/.parcel-cache/
```

9. 리액트 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

10. 테스팅 도구 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

11. jest.config.js 파일 작성

```js
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

12. Parcel 설치

```bash
npm i -D parcel
```

13. package.json 파일의 scripts 수정

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

바로 npm start로 하면 빌드 실패할 수 있는데 index.html 생성하고, package.json 추가 수정하면 된다.

```json
// "main": "index.js",
"source": "index.html"
```

14. 기본 코드 작성

* `index.html`
* `src/main.tsx`
* `src/App.tsx`
* `src/App.test.tsx`
* `src/components/Greeting.test.tsx`
* `src/components/Greeting.tsx`

15. 리소스 확인

[parcel plugin](https://github.com/elwin013/parcel-reporter-static-files-copy) 설치하고 .parcelrc 생성

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

16. eslint 확인

```shell
npx eslint .
npx eslint --fix .
```

package.json scripts 수정 후라면 아래 명령어도 가능

```shell
npm run lint
```
