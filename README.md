# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

* * *

## 개발 환경 세팅 기록하기

* 폴더 생성 (CMD)
  * mkdir 폴더이름 (폴더생성 명령어)
  * cd 폴더이름 (cmd의 경로 이동 명령어)
  * code . (cmd의 vsc 여는 명령어)

* vsc 작업영역에서 터미널 연 후 설정
  * npm init -y (package.json 생성)
  * 잊지말고 .gitignore 파일 생성 후 설정 - [gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

* 타입 스크립트 설정
  * npm i -D typescript
  * npx tsc --init
    * tsconfig.json 파일이 생성된다.
    * tsconfig.json 에서 주석처리된 jsx 해제하기

* ESLint 설정
  * npm i -D eslint
  * npx eslint --init
    * 설치할 때 몇가지를 물어볼텐데 충분히 기억할만하다.
    * .eslintrc.js 파일이 생성된다.
    * .eslintrc.js 에서 env 옵션에 jest: true 추가하기
    * .eslintrc.js 에서 extends 옵션에
  'plugin:react/jsx-runtime', 추가
  * .eslintignore 파일 생성하기
    * .gitignore와 똑같이 설정해도 상관없다.

* 리액트 설치
  * npm i react react-dom
  * npm i -D @types/react @types/react-dom

* 테스팅 도구 설치
  * npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
    * jest.config.js 파일 생성해주기

```js
//jest.config.js 설정

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

* Parcel 설치
  * npm i -D parcel
    * package.json 파일에 scripts 옵션을 수정해주기
      * "main": "index.js", 라고 되어있는 옵션도
            "source": "index.html", 로 변경하기
    * parcel-reporter-static-files-copy 설치하기
      * npm install -D parcel-reporter-static-files-copy
      * .parcelrc 파일 생성 후 아래 속성 추가

```json
// package.json 수정할 것
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

```json
//.parcelrc 추가 할 것
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}

```
