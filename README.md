# 들어가기 전에
## Visual Studio Code 설치하기
Visual Studio Code를 설치합니다.
```
brew install visual-studio-code
```


# JavaScript
## Node.js 설치하기
Node.js를 설치합니다.
```
brew install node.js
```
버전 확인하기
```
node -v
```


# TypeScript + React + ESLint + Jest + Parcel
## 작업 폴더 생성하기
작업 폴더를 생성합니다.
```
mkdir my-app
cd my-app
```


## npm 패키지 준비하기  
npm 패키지를 설치하는 두 가지의 명령어가 있습니다.
* 기본 명령어입니다. 세부 설정을 해야 합니다.
```
npm init
```
* 세부 설정 없이 default값으로 바로 생성합니다.
```
npm init -y //-y는 yes의 의미
```
설치가 완료 되면 `package.json` 파일이 생성 됩니다.


## .gitignore 파일 생성하기
git에 업로드 되지 않아야 하는 파일입니다.  
최소한 /node_modules/, /dist/ 는 포함해야 합니다.  

`.gitignore` 파일을 생성합니다.
```
touch .gitignore
```


## TypeScript 설정하기
1. TypeScript를 설치합니다.
```
npm i -D typescript
```

2. `tsconfig.json` 파일을 생성합니다.
```
npx tsc --init
```

3. JSX를 사용하기 위해 `tsconfig.json` 파일을 수정합니다.  
⌘+F로 jsx를 찾아서 주석을 삭제합니다.
```
// "lib": [],
"jsx": "preserve",
// "experimentalDecorators": true,
```


## ESLint 설정하기
1. ESLint를 설치합니다.
```
npm i -D eslint
```

2. 세부 설정을 합니다.
```
npx eslint --init
```
```
Ok to proceed? (y)
```
```
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


3. `.eslintrc.js` 파일을 수정합니다.  
아직 Jest를 설치하지 않았지만, 미리 설정합니다.
```
browser: true,
es2021: true,
jest: true //추가
```

4. `.eslintignore` 파일을 생성합니다.  
`.gitignore` 파일과 같은 내용을 입력합니다.


## React 설치하기
React를 설치합니다.  
설치하는 동안 `package.json` 파일을 수정하면 안 됩니다.
```
npm i react react-dom
npm i -D @types/react @types/react-dom
```
설치가 완료 되면 `package.json` 파일에서 확인할 수 있습니다.
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```


## Jest 설치하기
1. Jest를 설치합니다.
```
npm i -D jest @types/jest @swc/core @swc/jest
jest-environment-jsdom
@testing-library/react @testing-library/jest-dom
```

2. SWC로 빌드하기 위해 `jest.config.js` 파일을 생성합니다.
```
touch jest.config.js
```


## Parcel 설치하기
Parcel을 설치합니다.
```
npm i -D parcel
```


## package.json 파일 수정하기
`package.json` 파일을 수정합니다.
```
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
