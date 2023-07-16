# 개발 환경 세팅

환경 설정으로 스트레스 받지 말자^^

## :whale2: 키워드

* Node.js 개발 환경 세팅
* TypeScript + React + Jest + Parcel 개발 환경 세팅

## Node.js 개발 환경 세팅

### 노드 버전 확인

```shell
node -v
```

### 노드 설치

`LTS[Long term Support]`는 장기적으로 지원하는 버전으로 홀수이다. 최신 버전으로 다운 받는다.

fnm을 이용하면 더 빠른 실행을 할 수 있다.

```shell
fnm install --lts
fnm list
```

## TypeScript + React + Jest + Parcel 개발 환경 세팅

### 프로젝트 폴더 생성

```shell
mkdir my-app
cd my-app
code .
```

### npm 패키지 만들기

`-y`는 묻지도 따지지도 않고 Yes라는 뜻이다.

```shell
npm init -y
```

생성된 `package.json`은 name, version, description, author 등 수정 가능하다.

### .gitignore 파일 생성

최소 아래는 추가되야 한다.

```plaintext
/node_modules/ 
/dist/
```

github에서 제공해주는 `.gitignore`파일을 복사하는 걸 추천한다.

[.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

### 타입스크립트 설치

typeScript를 설치한다.

```shell
npm i -D typescript

혹은

npm install --save-dev typescript
```

`package.json`에는 dependencies와 devDependencies가 있다.

`dependencies`는 프로그램에서 직접 쓰는 것이다. 예를 들어, React가 있다.

`devDependencies`는 개발 환경에서 쓰는 것으로 도구, 툴이다. 예를 들어, TypeScript가 있다.

서버에 배포할 때 `devDependencies`를 빼고 설치할 수 있어서, 배포 크기를 줄일 수 있다.

### 타입스크립트 설정 초기화

npm으로 install해서 typescirpt가 node_modules에 추가 되었다. 이를 npx로 실행할 수 있다.

npx로 초기화 작업을 한다. tsx는 타입스크립트 컴파일러이다.

```shell
npx tsc --init 

혹은

./node_modules/.bin/tsc --init
```

npx는 npm으로 설치하지 않아도 npm 패키지를 관리하는 곳에서 받아서 실행할 수 있다.
그곳이 macOS는 ~/.npm/_npx 에 존재한다.

### tsconfig.json 파일 수정

jsx의 주석을 해제하고 다음과 같이 변경한다.

```json
"jsx": "react-jsx"
```

이는 `.tsx` 파일을 사용하게 해주고, import React를 하지 않아도 사용할 수 있게 해준다.

### eslint 설치

eslint는 도구이다.

```shell
npm i -D eslint
npx eslint --init
```

다음과 같이 상황에 맞게 질문에 대답한다.

```plaintext
설치할까요? y
Eslint 어떤 거에 사용할까요? 모두
자바스크립트 모듈 어떤거 사용할까요? JavaScript (import/export)
프레임워크는 어떤 거 쓸까요? react
타입스크립트 사용하나요? y
Browser, Node? Browser
스타일 가이드를 따르세요? 아니면 매번 물어볼까요? 전자
스탠다드를 따르세요? xo를 따르세요? xo
설정파일 어떻게 잡으시겠어요? js
추가 설치해도 되나요? y
패키지 매니저 뭐 쓸까요? npm (기본)
```

### eslint.js 수정

`env`안에 다음을 추가한다.

```json
jest: true
```

### .eslintignore 생성

eslint를 실행할 때 여긴 뺀다는 뜻이다. .gitignore과 동일하게 작성한다.

[.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

### React 설치

```shell
npm i react react-dom
```

### Type React

```shell
npm i -D @types/react @types/react-dom
```

### Jest 설치

jest는 테스트 도구이다.

```shell
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

### jest.config.js 파일 생성 및 작성

jes와 swc를 사용하기 위한 목적이다.

jest가 기본적으로 타입스크립트와 swc를 안 쓴다. 타입스크립트는 변환하지 않으면 실행 되지 않기 때문에 이걸로 잡아준다.

[jest.config.js](https://github.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js
)

```javascript
  '@testing-library/jest-dom/extend-expect', // jest-dom은 위에서 설치했습니다.
    './jest.setup', // 이 부분은 삭제합니다.
```

### Parcel 설치

parcel은 웹 서버를 띄우는 도구이다.

```shell
npm i -D parcel
```

### package.json에서 script에 추가

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

### index.html 생성

아래와 같이 파일을 만든다.

```shell
touch index.html
```

### package.json 수정

package.json에서 source로 수정한다.

```json
  "source": "./index.html",
```

이걸 안한다면 터미널에서 아래와 같이 실행해야 한다.

```shell
npx parcel index.html --port 8080
```

### typeScript 파일 생성 및 index.html 수정

폴더와 타입 스크립트 파일을 생성한다.

```shell
mkdir src
touch src/main.tsx
```

html 파일에 script를 추가한다.

```html
<script type="module" src="src/main.tsx"></script>
```

bundle을 썼기 때문에 ESmodule를 직접 쓰지 않고
Parcel이 변환해준다.

### tsx 파일 생성

```typescript
// src/main.tsx
import ReactDOM from 'react-dom/client';
import App from './App';

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(<App name='유소정' />);
}
```

```typescript
// src/main.test.tsx
function add(x: number, y: number): number {
  return x + y;
}

const context = describe;

describe('add 함수', () => {
  context('하나의 양수와 음수가 주어지면', () => {
    it('항상 하나의 양수보다 작은 값을 돌려준다', () => {
      expect(add(1, -2)).toBeLessThan(1);
    });
  });
});
```

```typescript
// src/App.tsx
import Greeting from './components/Greeting';

type AppProps = {
  name: string;
};

export default function App({name}: AppProps) {
  return (
    <div>
      <Greeting name={name} />
    </div>
  );
}
```

```typescript
// src/components/Greeting.tsx
import ReactDOM from 'react-dom/client';

function App(){
    return (
        <p>Hello, World</p>
    )
}

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}
```

```typescript
// src/components/Greeting.test.tsx
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
  render(<Greeting name='world' />);

  screen.getByText('Hello, world');

  screen.getByText(/Hello/);

  expect(screen.queryByText(/Hi/)).toBeFalsy();

  expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
```

### eslint 실행

현재 폴더와 그 아래까지 고친다.

```shell
npm run lint

or

npx eslint --fix .
```

### .eslintrc.js 에러 해결  

extends에 아래 내용을 추가한다.

```javascript
'plugin:react/jsx-runtime',
```

settings에 아래 내용을 추가한다.

```javascript
settings: {
  react: {
    version: '18.2.0',
  },
},
````

### eslint 확장자 설치

확장에서 ESLint를 설치한다.

그리고 .vscode 폴더를 만들고 안에 settings.json 파일을 만든다.

```shell
mkdir .vscode
touch settings.json
```

다음을 settings.json에 추가하면, Lint가 수정하는 것을 설정할 수 있다.

```json
{
  "editor.rulers": [80],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "trailing-spaces.trimOnSave": true
}
```

80열에서 줄 긋기, save하면 끝에 있는 줄 삭제 등

### .parcelrc 파일 생성 및 작성

parcel-reporter-static-files-copy 를 설치한다.

.parcelrc 파일을 생성한다.

static 폴더를 생성한다.

```shell
npm install -D parcel-reporter-static-files-copy

touch .parcelrc

mkdir static
```

.parcelrc에 다음과 같이 추가한다. 이는 static 폴더의 파일을 사용하게 한다.

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-static-files-copy"]
}
```

### 빌드 + 정적 서버 실행

parcel 번들러를 이용하여 프로젝트를 빌드한다.

```shell
npx parcel build
npx servor ./dist
```
