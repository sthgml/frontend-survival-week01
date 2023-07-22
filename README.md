# frontend-survival-week01

## 프로젝트 세팅하기

### 1. fnm (Fast Node Manager) 설치하고 Node.js 설치하기

Node 버전을 빠르고 쉽게 관리할 수 있는 fnm을 설치한다.

```bash
 brew install fnm
```

#### fnm 사용 방법

- Node 설치 : fnm install [node version]

    소수점 없이 입력하면 lts 버전을 설치한다.

```zsh
fnm install 18.17.0

// lts 버전 설치
fnm install 18 
or
fnm install --lts
```

- Node 버전 관리 : fnm use [node version]

    프로젝트 폴더마다 다른 Node 버전을 사용할 수 있다.

```zsh
fnm use 18.17.0
```

- default 버전 설정 : fnm default [node version]

```zsh
fnm default 18.17.0
```

### 프로젝트 폴더 생성

```zsh
mkdir frontend-survival-week01 // 폴더 생성
cd frontend-survival-week01 // 폴더 이동
fnm use default // node 버전 설정
echo "${fnm current}" > .nvmrc 
// .nvmrc 파일 생성 후 현재 node 버전 입력. 이후 설치된 node 버전과 프로젝트 node 버전이 달라도 프로젝트 폴더로 이동하면 자동으로 node 버전이 변경된다.
```

### 프로젝트 세팅

다음 명령어를 입력하면 package.json 파일이 생성된다.

```zsh
npm init -y
```

#### .gitignore 파일 생성

.gitignore에 폴더나 파일을 추가하면 git에 올리지 않는다.

```zsh
touch .gitignore
```

#### typescript 설치

타입스크립트를 설치하고, tsconfig.json 파일을 생성한다.

```tsconfig.json``` 파일은 타입스크립트 옵션을 설정하는 파일이다.

```-D``` 명령어는 개발용으로만 사용한다는 의미이다. 배포할 때는 사용하지 않는다.

package.json 파일에는 개발용으로만 사용하는 패키지를 dependencies가 아닌 ```devDependencies```에 추가한다.

```zsh
npm i -D typescript
npx tsc --init
```

#### ESLint 설치

ESLint를 설치하고 .eslintrc.js 파일을 생성한다.

```eslintrc.js``` 파일은 ESLint 옵션을 설정하는 파일이다.

```zsh
npm i -D eslint
npx eslint --init
touch .eslintignore
```

#### React 설치

```zsh
npm i react react-dom
npm i -D @types/react @types/react-dom
```

#### 테스트 라이브러리 설치

테스트에 필요한 라이브러리를 설치한다.

```zsh
npm i -D jest @types/jest @swc/core @swc/jest \
    jest-environment-jsdom \
    @testing-library/react @testing-library/jest-dom
```

jest.config.js 파일을 생성하고 다음과 같이 설정한다.

```js
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

#### parcel 설치

```zsh
npm i -D parcel
```

> 강의 내용을 바탕으로 기본적인 세팅내용을 정리했다.
> .eslintrc.js, tsconfing.json, jest.config.js 파일은 더 공부 후
추가 설정을 해야겠다.
