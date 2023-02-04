# React + TypeScript + Jest + ESLint + Parcel 개발환경

## ✅ 0. 빈 폴더 생성

```bash
mkdir react-app

cd react-app
```

## ✅ 1. npm 프로젝트 생성

```bash
npm init -y
```

## ✅ 2. `.gitignore` 파일 생성

```bash
touch .gitignore
```

`.gitignore` 파일이 생성되었으면 최소한 `node_modules` 폴더가 포함된 내용을 작성한다.

쉽게 `.gitignore` 를 작성하려면 밑에 링크를 참조하면 된다.

- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [github gitignore](https://github.com/github/gitignore)
- 직접작성

```text
/node_modules/
/.parcel-cache/
/dist
```

## ✅ 3. TypeScript Setting

`typescript` 패키지를 설치하고, `tsconfig.json` 파일을 생성한다.

```bash
npm i -D typescript

npx tsc --init
```

JSX를 사용하기 위해 `tsconfig.json` 을 수정한다.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

## ✅ 4. ESLint Setting

`eslint` 패키지를 설치하고, `.eslintrc.js`파일을 생선한다.

```bash
npm i -D eslint

npx eslint --init
```

```text
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

? Would you like to install them now with npm?
› Yes

? Which package manager do you want to use?
> npm
```

`.eslintrc.js` 파일을 수정한다.

```jsx
module.exports = {
 env: {
  browser: true,
  es2021: true,
  // 추가
  jest: true,
 },
 extends: [
  'plugin:react/recommended',
  // 추가
  'plugin:react/jsx-runtime',
  'xo',
 ],
 settings: {
    react: {
      version: "detect"
    }
  },
}
```

`.eslintignore` 파일을 작성한다.

```bash
touch .eslintignore
```

```text
/node_modules/
/dist/
/.parcel-cache/
```

## ✅ 5. React 설치

```bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

## ✅ 6. Jest Setting

테스팅에 필요한 패키지들을 설치한다. (+ `swc`)

```bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

`jest.config.js` 파일을 작성한다.

```bash
touch jest.config.js
```

```jsx
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

## ✅ 7. Parcel Setting

parcel 패키지를 설치한다.

```bash
npm i -D parcel
```

`.package.json` 파일에 `source` 속성을 추가한다.

```json
{
 "source": "./index.html"
}
```

`parcel-reporter-static-files-copy` 파일 설치 후 `.parcelrc` 파일을 작성한다.

```bash
npm i -D parcel-reporter-static-files-copy

touch .parcelrc
mkdir static
```

```text
{
 "extends": ["@parcel/config-default"],
 "reporters": ["...", "parcel-reporter-static-files-copy"]
}
```

## ✅ 8. `package.json` 파일 scripts 수정

```json
{
 "scripts": {
  "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
 }
}
```

## ✅ 9. 기본 코드 작성

기본 파일을 먼저 생성한다.

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

- `index.html`

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <title>React App</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="./src/main.tsx"></script>
    </body>
</html>
```

- `src/components/Greeting.tsx`

```tsx
export default function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}
```

- `src/components/Greeting.test.tsx`

```tsx
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
 render(<Greeting name='world'></Greeting>);
 expect(screen.queryByText(/Hello/)).toBeFalsy();
});
```

- `src/App.tsx`

```tsx
import Greeting from './components/Greeting';

export default function App({name}: {name: string}) {
 return (
  <div>
   <Greeting name='greeting' />
   <p>Hello, {name}</p>
  </div>
 );
}
```

- `src/main.tsx`

```tsx
import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
 const element = document.getElementById('root');
 if (!element) {
  return;
 }

 const root = ReactDOM.createRoot(element);
 root.render(<App name='react' />);
}

main();
```

- `src/main.test.tsx`

```tsx
function add(x: number, y: number): number {
 return x + y;
}

const context = describe;
describe('add 함수는', () => {
 context('두 개의 양수가 주어졌을 때', () => {
  it('항상 두 개의 숫자보다 큰 값을 돌려준다.', () => {
   expect(add(1, 2)).toBeGreaterThan(2);
   expect(add(1, 2)).toBeGreaterThan(1);
  });
 });
 context('하나의 양수와 음수가 주어졌을 때', () => {
  it('항상 하나의 양수보다 작은 값을 돌려준다.', () => {
   expect(add(1, -2)).toBeLessThan(1);
  });
 });
});
```

## ✅ 10. 프로젝트 실행

- 개발 환경에서 프로젝트 실행

```bash
npm run start
```

- 테스트 실행

```bash
npm run test
```

- 린트 적용

```bash
npm run lint
```

## ✅ 11. VSCode Setting

`.vscode/setting.json` 파일에 설정 추가.

```bash
mkdir .vscode
touch .vscode/settings.json
```

```bash
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
