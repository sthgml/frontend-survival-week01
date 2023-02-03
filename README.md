# React + TypeScript + Parcel + ESLint 프론트엔드 개발환경 세팅

Node.js 가 최신 버전인지 확인한다.

---

터미널을 켠다.

---

## 작업 폴더 생성

```bash
mkdir my-app

cd my-app
```

---

### VS code 켜기

```bash
code .
```

---

### 3. npm 프로젝트 생성

```bash
npm init -y
```

---

### 4. .gitignore 생성

```bash
touch .gitignore
```

`.gitignore`

```.
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
```

</details>

</br>
-> 구글에 "github gitignore node" 라고 검색하면 </br>
github에서 제공하는 node js 용 예시 .gitignore를 확인 할 수 있다. 이걸 사용하자! </br>
-> Raw 버튼을 눌러서 텍스트 파일을 전체 복사하고 내 폴더안에 .gitigore에 붙여넣는다. </br>

</br>

---

</br>

### 5. TypeScript 설정

```bash
npm i -D typescript
```

- devDependencies 에 넣어서 개발환경에서만 사용하겠다는 의미

```bash
npx tsc --init
```

- tsconfig.json 파일이 생성된다.
- TypeScript 프로젝트를 어떻게 빌드할지 설정하는 파일이다.

</br>

`tsconfig.json` </br>

- jsx 속성을 변경한다.
- 16번째 줄에 "jsx": "react-jsx", 로 변경하고 활성화 시킨다.

</br>

---

</br>

### 6. ESLint 설정

설치 및 실행

```bash
npm i -D eslint
```

```bash
npx eslint --init
```

ESLint 세팅가이드

```.
You can also run this command directly using 'npm init @eslint/config'.

? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
**❯ To check syntax, find problems, and enforce code style**

? What type of modules does your project use? …
**❯ JavaScript modules (import/export)**
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
**❯ React**
  Vue.js
  None of these

? Does your project use TypeScript? › ****No **/ Yes**

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
**✔ Browser**
✔ Node

? How would you like to define a style for your project? …
**❯ Use a popular style guide**
  Answer questions about your style

? Which style guide do you want to follow? …
  Standard: <https://github.com/standard/eslint-config-standard-with-typescript>
**❯ XO: <https://github.com/xojs/eslint-config-xo-typescript**>

? What format do you want your config file to be in? …
**❯ JavaScript**
  YAML
  JSON

? Would you like to install them now? › No / **Yes

? Which package manager do you want to use? …
❯ npm
  yarn
  pnpm**

```

</br>

`.eslintrc.js`

```js
module.exports = {
 env: {
  browser: true,
  es2021: true,
  jest: true,
 },
 settings: {
  react: {
   version: 'detect',
  },
 },
 extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'xo'],
 overrides: [
  {
   extends: ['xo-typescript'],
   files: ['*.ts', '*.tsx'],
  },
 ],
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['react'],
 rules: {},
};

```

.eslintignore 파일을 생성 후 작성한다.

```bash
touch .eslintignore
```

`.eslintignore`

```.
/node_modules/
/dist/
/.parcel-cache/
```

</br>

---

</br>

### 7. React 설치

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

</br>

---

</br>

### 8. 테스팅 도구 설치

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

- jest 라는 테스팅 도구 설치
- jest랑 swc를 같이 쓰는게 목표

</br>

---

</br>

### 9. jest.config.js 파일 작성

- 테스트에서 SWC를 사용한다.
- js로 ts 그냥 실행 못함. 변환해줘야함. 그거를 여기에 작성.

```bash
touch jest.config.js
```

```js
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

</br>

---

</br>

### 10. Parcel 설치

```bash
npm i -D parcel
```

- web / dev 서버를 띄우는 도구
- Parcel 은 파일 변화를 자동으로 다시 빌드(rebuild) 하고 빠른 모듈 교체를 지원하는 내장 개발용 서버가 있어 빠른 개발이 가능하기에 사용.
- 진입 파일을 지정하자.

</br>

```bash
touch .parcelrc
```

```.
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

---

</br>

### 11. package.json 수정

프로젝트를 실행하는 명령어를 작성해준다.

```js
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

node 의 경우 처음 실행하는게 main으로 잡아주고 있음

```js
  "main": "index.js",
```

그런데 우리는 웹서버를 띄워줄거라서 source로 바꿔준다.

```js
  "source": "index.html",
```

</br>

---

</br>

### 12. 기본 코드 작성

```bash
touch index.html

mkdir src
cd src
touch main.tsx
```

- `index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>React Demo App</title>
</head>
<body>
 <div id="root"></div>
 <script type="module" src="./src/main.tsx"></script>
</body>
</html>
```

- `src/main.tsx`

```js
import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
 const element = document.getElementById('root');

 if (!element) {
  return;
 }

 const root = ReactDOM.createRoot(element);
 root.render(<App />);
}

main();
```

</br>

`jest.config.js`

```js
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

---

</br>

### 13. 실행

웹 서버 실행

```bash
npm start
```

웹 브라우저로 확인: <http://localhost:8080/>

</br>

eslint 실행

```bash
npm run lint
```

테스트 파일 작성 후 jest 실행 하는법

```bash
npm test

// 파일 변경 될 때 마다 계속 실행 해줌
npm watch:test
```
