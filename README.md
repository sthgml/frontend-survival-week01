# React + Typescript + Jest + Eslint + Parcel 개발환경 세팅

## 📌 실행 명령어

script에 설정된 명령어

- `start`: 포트번호 주소로 프로그램 실행
- `build`: 빌드하기
- `check`: TS 컴파일을 통해 문법 오류 확인
- `lint`: Eslint 문법 오류를 잡아내고 수정함
- `test`: jest로 테스트 실행
- `watch:text`: 저장할 때마다 테스트 실행

## 📌 fnm & Node.js 설치

fnm을 사용하여 Node.js의 버전을 관리

### fnm 설치

```bash
# mac, linux
brew install fnm

# window
scoop install fnm
```

### Node.js 설치

```bash
# 설치 가능한 버전 확인
fnm ls-remote

# fnm으로 설치하고, 기본 사용 설정
fnm install --lts
fnm use lts-latest
fnm default $(fnm current)

# 설치된 상태 확인
fnm list
fnm current
```

### npm 설치 및 업그레이드

```bash
npm install -g npm
```

## 📌 본격적인 개발환경 세팅

### 작업 폴더 준비

```bash
mkdir my-app

cd my-app

# vscode로 바로 열기
code .
```

### npm 패키지 준비

`package.json`파일이 생성됨

```bash
npm init -y
```

### `.gitignore` 파일 작성

```json
// root의 폴더일 때
/node_modules/

// 폴더일 때
/node_modules

// 폴더 or 파일 상관없이
node_modules
```

### 타입스크립트 설정

```bash
# 설치
npm i -D typescript

# 타입스크립트 컴파일러 초기화
npx tsc --init
```

### `tsconfig.json` 파일의 jsx 속성 변경

JSX를 사용하기 위해 옵션을 수정

```json
// before
// "jsx": "preserve", /* Specify what JSX code is generated. */

// after
"jsx": "react-jsx", /* Specify what JSX code is generated. */
```

### ESLint 설정

1. 설치 & 초기 설정

   ```bash
   # 설치
   npm i -D eslint

   # 설정
   npx eslint --init
   ```

   ```bash
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

    ? What format do you want your config file to be in? …
    ❯ JavaScript

    ? Would you like to install them now with npm?
    › Yes
    ```

2. `.eslintrc.js` 파일을 적절히 수정

   - jest 사용한다면 미리 `env`에 `jest: true` 넣어주면 좋음
   - 상단에 매번 React import하기 싫다면 extends에 `plugin:react/jsx-runtime` 추가

3. `.eslintignore` 파일 작성  
   eslint로 문법 검사하지 않을 파일 세팅

### 리액트 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### 기본 코드 작성하기

아래와 같은 위치, 형태의 파일을 만들어서 작성하면 됨

- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/App.test.tsx` (테스트)

### Jest 설치

```bash
# jest + swc
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

- .eslintrc.js 파일에 설정 추가

    ```bash
    module.exports = {
        env: {
            jest: true,
        },
    };
    ```

### Parcel 설치

```bash
npm i -D parcel
```

- `.gitignore`과 `.eslintignore` 파일에 Parcel 캐시 추가

    ```json
    /.parcel-cache/
    ```

### `index.html` 파일 작성

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Sample</title>
</head>
<body>
  <div id="app">
    Loading...
  </div>
  <script type="module" src="./src/index.tsx"></script>
</body>
</html>
```

## ➕ vscode 세팅

.vscode/settings.json 파일 만들고 설정 추가 (저장할 때마다 자동으로 lint 검사하고 수정)

```json
{
    "editor.rulers": [
        80
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "trailing-spaces.trimOnSave": true
}
```
