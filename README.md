# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 패키지 설치

1. npm init -y 로 package.json 파일을 생성한다.
2. npm i -D typescript
3. npx tsc --init 로 tscofig.json 생성
4. tsconfig.json 의 jsx : "react-jsx" 를 열어준다.
5. npm i -D eslint
6. npx eslint --init (To check syntax, find problems, and enforce code style => JavaScript modules (import/export) => ... => XO => format javasctrit => npm )
7. eslint.rc에 jest를 사용할꺼다라고 env에 jest: true를 넣어준다.
8. .eslintignore => eslint 실행할때 제외할 곳을 작성한다.

```bash
/node_modules/
 /dist/
 /.parcel-cache/
```

9.리액트 설치하기

```bash
 npm i react react-dom
 npm i -D @types/react @types/react-dom
```

10.테스팅 도구 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
 jest-environment-jsdom \
 @testing-library/react @testing-library/jest-dom
```

11.jest.config.js

jest랑 swc를 같이 사용하기 위해서는 설정이 필요함

12.parcel 도구 설치

```bash
    npm i -D parcel
```

13.package.json 명령어 추가

```bash
"scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  }
```

14.index.html 파일 생성 & package.json source 추가

```bash
"source" : "index.html",
```

node에서는 실행하는게 main으로 잡아준다.
웹 서버를 띄울때는 source로 변경해줌
코드를 실행하면 script가 추가가 되어있는데 이는 parcel이 자동으로 넣어둔것

15.eslint 설정 추가
prettier와 eslint가 충돌하고 있음.

```bash
npm install --save-dev eslint-config-prettier
```

extends: [... 'prettier/@typescript-eslint'] 를 넣어줘 prettier와 충돌하는 eslint를 꺼준다.

16.parcel 과 관련된 설정
제로 config이지만 설정해주면

```bash
npm i -D parcel-reporter-static-files-copy
```

- 이미지 경로 등을 위한 static 파일 처리
