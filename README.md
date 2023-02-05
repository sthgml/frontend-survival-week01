# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

TypeScript + ESLint + React + Jest + Parcel 개발 환경 세팅

매번 프로젝트 때마다 ReadMe 문서를 따라서 생각없이 따라만 해도 누구나 빠르게 동일한 셋팅

빠르게 코드블럭 안의 내용만 보고 따라하면 환경 셋팅 가능

## 0. npm 프로젝트 생성 및 .gitignore

`빈폴더 생성`

```bash
mkdir [projectName]

cd [projectName]

code .
```

`npm 프로젝트 생성`

```bash
npm init -y
```

`.gitignore 추가`

```bash
touch .gitignore
```

```.gitignore
/node_modules/
/dist/
/.parcel-cache/
/coverage/
```

## 1. TypeScript 세팅

`typescript 패키지 설치`

```bash
npm i -D typescript

npx tsc --init
```

`jsx 옵션 추가`: JSX를 사용을 위한 tsconfig.json의 compilerOptions

```tsconfig.json
{
  "compilerOptions": {
    // ...(전략)...
    "jsx": "react-jsx"
    // ...(후략)...
  }
}
```

## 2. ESLint 세팅

`ESLint 패키지 설치`

```bash
npm i -D eslint

npx eslint --init
```

```txt
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
❯ XO(or airbnb)

? What format do you want your config file to be in? …
❯ JavaScript

? Would you like to install them now with npm?
› Yes
```

<!-- `aidbnb 의존성 패키지 설치`

```bash
npm info 'eslint-config-airbnb@latest' peerDependencies
```

- eslint-plugin-import: ES2015+의 import/export 구문을 지원
- eslint-plugin-jsx-a11y: 접근성 지원
- eslint-plugin-react-hooks: 리액트 hooks 지원

```bash
npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
``` -->

`.eslintrc.js 설정 추가`

jest: true 추가, rule, plugin:react/jsx-runtime 등

extends는 XO와 airbnb 중 취향껏

[airbnb eslint](https://github.com/iamturns/eslint-config-airbnb-typescript#setup)

```javascript
module.exports = {
  // ...(전략)...
  env: {
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "xo", // 또는 'airbnb'
    "plugin:react/jsx-runtime",
  ],
  // ...(중략)...
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    curly: "error",
    "brace-style": "error",
    "no-multi-spaces": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "no-whitespace-before-property": "error",
    "func-call-spacing": "error",
    "space-before-blocks": "error",
    "keyword-spacing": ["error", { before: true, after: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "space-in-parens": ["error", "never"],
    "block-spacing": "error",
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error", { mode: "strict" }],
    "arrow-spacing": ["error", { before: true, after: true }],
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     devDependencies: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
    //   },
    // ],
    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     js: "never",
    //     jsx: "never",
    //     ts: "never",
    //     tsx: "never",
    //   },
    // ],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  },
};
```

`.eslintignore 파일 작성`

```bash
touch .eslintignore
```

```json
/node_modules/
/dist/
/.parcel-cache/
/coverage/
```

`.vscode/settings.json 설정 추가`

```bash
mkdir .vscode
touch .vscode/settings.json
```

```settings.json
{
  "editor.rulers": [80],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "trailing-spaces.trimOnSave": true
}
```

## 3. React 설치

`react, react-dom 패키지 설치`

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom
```

## 4. jest 세팅

`jest 및 swc 설치`

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

`jest.config.js 파일 작성`

ts와 swc를 기본적으로 지원하지 않아서 추가 설정

```bash
touch jest.config.js
```

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
            decorators: true,
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

## 5. Parcel 설치

`패키지 설치`

```bash
npm i -D parcel
```

`package.json에 source 추가 및 명령어 셋팅`

```package.json
 "source": "./index.html",
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

`parcel-reporter-static-files-copy 설치 및 .parcelrc 추가`

```bash
npm i -D parcel-reporter-static-files-copy
```

```bash
mkdir static
mkdir static/images
touch .parcelrc
```

```.parcelrc
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

## 6. 기본 코드 작성

```bash
touch index.html

mkdir src
touch src/main.tsx
touch src/main.test.tsx
touch src/App.tsx

mkdir src/components
touch src/components/Greeting.tsx
touch src/components/Greeting.test.tsx
```

`index.html`

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

`src/main.tsx`

```tsx
import ReactDOM from "react-dom/client";
import App from "./App";

function main() {
  const element = document.getElementById("root");

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(<App name="react" />);
}

main();
```

`src/App.tsx`

```tsx
import Greeting from "./components/Greeting";

export default function App({ name }: { name: string }) {
  return (
    <div>
      <Greeting name="greeting" />
      <p>Hello, {name}</p>
    </div>
  );
}
```

`src/main.test.tsx`

```tsx
function add(x: number, y: number): number {
  return (x + y);
}

const context = describe;

describe("add 함수는", () => {
  it("두 수의 합을 리턴한다.", () => {
    expect(add(1, 2)).toBe(3);
  });

  context("두 개의 양수가 주어졌을 때", () => {
    it("항상 두 개의 숫자보다 큰 값을 돌려준다.", () => {
      expect(add(1, 2)).toBeGreaterThan(2);
      expect(add(1, 2)).toBeGreaterThan(1);
    });
  });
  context("하나의 양수와 음수가 주어졌을 때", () => {
    it("항상 하나의 양수보다 작은 값을 돌려준다.", () => {
      expect(add(1, -2)).toBeLessThan(1);
    });
  });
});
```

`src/components/Greeting.tsx`

```tsx
export default function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}
```

`src/components/Greeting.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Greeting", () => {
  render(<Greeting name="world"></Greeting>);

  expect(screen.queryByText(/hi/)).toBeFalsy();
});
```

## 6.실행

`개발 환경 실행`

```bash
npm start
```

`타입스크립트 체크 및 린트 적용`

```bash
npm run lint && npm run check
```

`테스트 결과 보기`

```bash
npx jest --verbose
```

`빌드 + 정적 서버 실행`

```bash
npx parcel build

npx servor ./dist
```

## VSCode 익스텐션

- ESLint / Stylelint / Prettier
- Auto Close Tag / Auto Import / Auto Rename Tag / Autoprefixer
- Live Server
- Reactjs code snippets / React Extension Pack
- markdownlint, Trailing Spaces
- TODO Highliht / Color Highlight
- Material Icon Theme
