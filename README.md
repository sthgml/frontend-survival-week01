# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

* [Node.js](https://nodejs.org/ko)
* [fnm (Fast Node Manager)](https://github.com/Schniz/fnm)
  * 노드 버전관리

## 프로젝트 초기세팅

### 폴더 생성

``` bash
mkdir my-app
cd my-app
```

### package.json 생성

``` bash
npm init -y
```

### .gitignore 파일 작성

``` bash
touch .gitignore
```

### typescript 설정

``` bash
npm i -D typescript

npx tsc --init
```

### ESLint 설정

``` bash
npm i -D eslint

npx eslint --init
```

![스크린샷 2023-04-16 오후 5 05 55](https://user-images.githubusercontent.com/38122860/232326810-e19f2573-a461-4643-8c08-73cb500f42ed.png)

### .eslintrc.js 파일 수정

* jest: true를 잡아주면 좋다.

### .eslintignore 파일을 작성

``` bash
touch .eslintignore
```

### React 설치

``` bash
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### Jest 설치

``` bash
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

### jest.config.js 파일을 작성

``` bash
touch jest.config.js
```

``` javascript
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

### Parcel 설치

``` bash
npm i -D parcel
```

### script 추가

``` bash
"start": "parcel --port 8080",
"build": "parcel build",
"check": "tsc --noEmit",
"lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
"test": "jest",
"coverage": "jest --coverage --coverage-reporters html",
"watch:test": "jest --watchAll"
```

## Code 추가

### index.html

``` html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>React Demo App</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="./src/main.tsx"></script>
    </body>
</html>
```

### main.tsx

``` typescript
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

### App.tsx

``` typescript
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <img src='/images/test.jpg' alt='test image' width={200}/>
      <Greeting name='world' />
      <p>Hello, world!</p>
    </>
  );
}

export default App;
```

### Greeting.tsx

``` typescript
export default function Greeting({name}: {
  name: string;
}) {
  return (
    <p>Hello, {name}</p>
  );
}
```

## 테스트 코드 추가

### main.test.ts

``` typescript
function add(x: number, y: number): number {
  return x + y;
}

const context = describe;

describe('add 함수는', () => {
  context('두 개의 양수가 주어졌을 때', () => {
    it('두 숫자의 합을 리턴한다.', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
```

### Greeting.test.tsx

``` typescript
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
  render(<Greeting name='world' />);

  screen.getByText('Hello, world!');

  screen.getByText(/Hello/);

  expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
```

## Parcel 정적 파일 추가

``` bash
npm i -D parcel-reporter-static-files-copy
touch .parcelrc
```

``` bash
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```