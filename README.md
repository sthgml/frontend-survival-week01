# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## Into

[데모 페이지 구경하기](https://frontend-survival-week01.vercel.app/)

개발환경 설정 방법을 모아둔 문서입니다.
기본적으로 아래 기술 스택을 사용하고 나열 순서대로 설치 및 설정을 진행합니다.

- TypeScript
- ESLint
- React
- Jest, React Testing Library
- Parcel


## Node가 설치되어 있지 않은 경우

만약 node가 설치되어 있다면 1번부터 진행하시면 됩니다.
node가 설치되어 있지 않다면 아래와 같이 설치해줍니다.
[fnm](https://github.com/Schniz/fnm)은 Fast Node Manager로 node 버전을 관리해주는 도구입니다. 여러 버전을 사용할 수 있는 장점이 있습니다.

```shell
# fnm 설치
brew install fnm

# 노드js 설치
fnm install --lts
fnm install {version}

# 목록 확인
fnm list

# zshrc에 추가
eval "$(fnm env --use-on-cd)"

# fnm 사용
fnm use {version}
```

## 1. package.json 생성

처음에는 `npm init`으로 package.json을 생성해줍니다.

```shell
npm init -y
```

## 2. 의존성 설치 전 gitignore 생성

의존성 설치 전에 gitignore를 생성해줍니다.
ignore안 작성내용은 [github_gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore) 내용을 넣어줍니다.

```shell
touch .gitignore
```

## 3. 필요한 의존성 설치

우선 typescript를 설치한 후 typescript 설정 파일을 생성해줍니다.

```shell
npm i -D typescript
npx tsc --init
```

tsconfig에서 `jsx`를 `react-jsx`로 변경해줍니다.

```json
{
 "compilerOptions": {
  // ...
  "jsx": "react-jsx",
  // ...
 }
}
```

eslint 설치 후 eslint 설정 파일을 생성해줍니다.

```shell
npm i -D eslint
npx eslint --init
```

eslint 첫 설정을 아래와 같이 진행합니다.

```text
How would you like to use ESLint?
❯ To check syntax, find problems, and enforce code style

What type of modules does your project use?
❯ JavaScript modules (import/export)

Which framework does your project use?
❯ React

Does your project use TypeScript?
❯ Yes

Where does your code run?
❯ Browser

How would you like to define a style for your project?
❯ Use a popular style guide

Which style guide do you want to follow?
❯ XO

What format do you want your config file to be in?
❯ JavaScript

Would you like to install them now with npm?
❯ Yes

Which package manager do you want to use?
❯ npm
```

.eslintrc.js 파일에서 jest: true와 'plugin:react/jsx-runtime'를 추가해줍니다.

```json
{
 "env": {
  "browser": true,
  "es2021": true,
  "jest": true
 },
  "extends": [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "xo",
  ],
}
```

.eslintignore 파일을 생성해줍니다.

```shell
touch .eslintignore
```

.eslintignore

```text
/node_modules/
/dist/
/.parcel-cache/
```

react와 react-dom을 설치해줍니다.

```shell
npm i react react-dom
npm i -D @types/react @types/react-dom
```

테스팅 도구를 설치 후 설정 파일을 생성해줍니다.

```shell
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

```shell
touch jest.config.js
```

jest.config.js

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

번들러 (Parcel) 설치

```shell
npm i -D parcel
```

정적 파일을 사용하기 위해 parcel-reporter-static-files-copy를 설치해줍니다.

```shell
npm i -D parcel-reporter-static-files-copy
```

.parcelrc 파일을 생성해줍니다.

```shell
touch .parcelrc
```

.parcelrc

```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

package.json에 scripts, source를 추가해줍니다.

```json
{
  // ...
  // "main": "index.js", -> 삭제
  "source": "index.html",
  // ...
  "scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
  },
}
```

## 4. 테스트 셋팅

index.html을 생성해줍니다.

```shell
touch index.html
```

index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Demo App</title>
  </head>
  <body>
    <div id="root" />
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

테스트를 위해 디렉토리 구조 및 파일을 생성해줍니다.

```text
.
├── src
│   ├── main.tsx
│   ├── main.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Greeting.tsx
│   │   └── Greeting.test.tsx
├── static
│   └── images
│       └── dummy.jpeg

```

main.tsx

```tsx
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

main.test.tsx

```tsx
function add(x: number, y: number): number {
 return (x * 10 + y * 10) / 10;
}

const context = describe;

describe('add 함수는', () => {
 context('두 개의 양수가 주어졌을 때', () => {
  it('두 숫자의 합을 리턴한다.', () => {
   expect(add(1, 2)).toBe(3);
  });
 });

 context('0.1과 0.2가 주어져도', () => {
  it('이상한 값을 리턴하지 않는다.', () => {
   expect(add(0.1, 0.2)).toBe(0.3);
  });
 });
});
```

App.tsx

```tsx
import {useState} from 'react';

import Greeting from './components/Greeting';

export default function App() {
 const [count, setCount] = useState(0);

 const handleClick = () => {
  setCount(count + 1);
 };

 return (
  <div>
   <Greeting name='world' />
   <img src='/images/dummy.jpeg' alt='listImage' width='200' height='200' />
   <p>Count: {count}</p>
   <button type='button' onClick={handleClick}>
        Increment
   </button>
  </div>
 );
}
```

components/Greeting.tsx

```tsx
export default function Greeting({name}: {name: string}) {
 return <p>Hello, {name}!</p>;
}
```

components/Greeting.test.tsx

```tsx
import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
 render(<Greeting name='world' />);

 screen.getByText('Hello, world!');

 screen.getByText(/Hello/);

 expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
```

더미 이미지 파일을 아래 경로에 넣어줍니다.
static/images/dummy.jpeg

```shell
mkdir -p static/images
```

더미 이미지 파일입니다.
![dummy](./static/images/dummy.jpeg)

vscode 설정 파일을 생성해줍니다.

```shell
mkdir .vscode
touch .vscode/settings.json
```

settings.json

```json
{
  "editor.rulers": [
    80
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "trailing-spaces.trimOnSave": true,
  "editor.formatOnSave": false,
  "cSpell.words": [
    "parcelrc"
  ]
}
```

## 5. 동작 확인

테스트를 통과하는지 확인 합니다.

```shell
npm run test
```

테스트를 통과하면 로컬 서버를 실행하여 화면이 잘 나오는지 확인합니다.

```shell
npm start
```
