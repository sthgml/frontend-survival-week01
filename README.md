# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

## 개발 환경

- Node: 18.18.2 LTS

## 사용 패키지

- Parcel
- ESLint
- TypeScript
- React
- Jest

### 프로젝트

1. 프로젝트 패키지 초기화
   `yarn init -y`
2. git 버전관리 제외 대상 -> .gitignore 추가

- `touch .gitignore`
- 'gitignore.io' 내용 추가

### ESLint

1. 설치 스크립트

   - `yarn add --dev eslint`

2. eslint 체크 제외 대상 -> .eslintignore 추가

   - `touch .eslintrc.js`

```txt
   /node_modules/
   /coverage/
   /dist/
   .parcel-cache
```

3.ESLint 공통 config - eslint.rc 설정

- `npx eslint --init`
- eslintrc.js

  ```javascript
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
    extends: ['xo', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
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

  4.package.json 에 실행 스크립트 추가

  ```json
  {
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx ."
  }
  ```

## Parcel

1. 설치 스크립트

   - `yarn add --dev parcel`

2. Static 파일 설정

   - `yarn add --dev parcel-reporter-static-files-copy`
   - `touch .parcelrc`

     ```json
     {
       "extends": ["@parcel/config-default"],
       "reporters": ["...", "parcel-reporter-static-files-copy"]
     }
     ```

3. index.html 생성

   - `touch index.html`

     ```html
     <!doctype html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="icon" href="./static/favicon.ico" />
         <title>Document</title>
       </head>
       <body>
         <div id="app"></div>

         <script type="module" src="./src/index.tsx"></script>
       </body>
     </html>
     ```

## TypeScript

1. 설치 스크립트

   - `yarn add --dev typescript`

2. TypeScript 컴파일 공통 config - tsconfig 설정

   - `npx tsc --init`
   - tsconfig.json

     ```json
     {
       "compilerOptions": {
         /* Language and Environment */
         "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
         "jsx": "preserve",

         /* Modules */
         "module": "commonjs" /* Specify what module code is generated. */,

         /* JavaScript Support */
         "allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,

         /* Emit */

         /* Interop Constraints */
         "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
         "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

         /* Type Checking */
         "strict": true /* Enable all strict type-checking options. */,

         /* Completeness */
         "skipLibCheck": true /* Skip type checking all .d.ts files. */
       }
     }
     ```

3. index.ts 생성 후 테스트

   - `touch src/index.ts && npx tsc`

4. 실행 스크립트 추가

```json
{
  "check": "tsc --noEmit"
}
```

## React

1. 설치 스크립트

   - `yarn add react react-dom @types/react @types/react-dom`

2. src/index.tsx 생성

   - `touch src/index.tsx`

     ```ts
     import React from 'react';
     import {createRoot} from 'react-dom/client';
     import App from './App';

     const init = () => {
      const app = document.getElementById('app');

      if (app) {
        const container = createRoot(app);

        container.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        );
      }
     };

     init();
     ```

3. index.html 진입점으로 연결
   `<script type="module" src="./src/index.tsx"></script>`

4. 실행 스크립트 추가

```json
{
  "start": "parcel --port 8080",
  "build": "parcel build"
}
```

## Jest

1. 설치 스크립트
   `yarn add --dev jest @types/jest @swc/core @swc/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom`
2. Jest 공통 config 설정
   `touch jest.config.js`

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup'],
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

`touch jest.setup.js`

```js
import '@testing-library/jest-dom';
```

3.App.test 추가
`touch src/App.test.tsx`

```ts
import {render, screen} from '@testing-library/react';
import App from './App';

test('render app component', () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
```

4.실행 스크립트 추가

```json
{
  "test": "jest",
  "coverage": "jest --coverage --coverage-reporters html",
  "watch:test": "jest --watchAll"
}
```

## 결과

### 디렉토리 구조

- src
  - App.test.tsx
  - App.tsx
- index.tsx
- static
  - images
- .eslintingore
- .eslintrc.js
- .gitignore
- .parcelrc
- index.html
- jest.config.js
- jest.setup.js
- package.json
- tsconfig.json
