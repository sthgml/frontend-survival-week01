# frontend-survival-week01

# 환경 설정 만들기

## node.js 버전을 관리 fnm 설치

설치

```
brew install fnm
```

node.js 설치

```
fnm install --lts
```

버전 확인

```
fnm list
fnm current
```

## TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

오래된 참고 자료:

- [React + TypeScript + Parcel](https://github.com/ahastudio/CodingLife/tree/main/20211008/react)
- [usestore-ts 세팅 예제](https://github.com/ahastudio/CodingLife/tree/main/20220726/react)

### 1. 작업 폴더 만들기 및 코드 에디터

```
mkdir my-app
cd my-app
webstorm .
```

### 2. npm 패키지 및 gitignore 파일 설정

```
npm init -y
```

gitignor 파일 생성([.gitignore](https://github.com/toptal/gitignore.io))

```
touch .gitignore
```

### 3. 타입스크립트 설정

타입스크립트 설치

```
npm i -D typescript
```

tsconfig 생성([tsconfig.json](https://github.com/ahastudio/CodingLife/blob/main/20230113/react/tsconfig.json))

```
npx tsc --init
```

주석 제거

```
"jsx": "react-jsx
```

### 4. ESLint 설정

설치

```
npm i -D eslint
```

evn 파일 생성 ([.eslintrc.js](https://github.com/rara-record/react-settings/blob/main/.eslintrc.js))

```
npx eslint --init
```

elintignore 생성([.eslintignore](https://github.com/rara-record/react-settings/blob/main/.eslintignore))

### 5. React 설치

설치

```
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### 6. Jest 설정

테스팅 도구 설치

```
npm i -D jest @types/jest @swc/core @swc/jest
jest-environment-jsdom
@testing-library/react @testing-library/jest-dom
```

config 작성 ([jest.config.js](https://github.com/rara-record/react-settings/blob/main/jest.config.js))

### 7. Parcel 설치

```
npm i -D parcel
```

### package.json scripts 수정

```
 "scripts": {
    "start": "parcel index.html --port 8080",
    "build": "parcel build index.html",
    "check": "tsc --noEmit",
    "lint": "eslint --fix --ext .js,.jsx,.ts,.tsx .",
    "test": "jest"
  },
```
