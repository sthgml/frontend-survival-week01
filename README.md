# 개발 환경 설정하기

- Windows 10 Pro 22H2 Build 19045.3324
- Node.js 18.17.
- Windows PowerShell
- Visual Studio Code

&nbsp;

## Fast Node Manager

[설치하러 가기(GitHub Repository).](https://github.com/Schniz/fnm)

&nbsp;

## NPM Upgrade

    npm install -g npm

&nbsp;

## 프로젝트 초기화

Node Package Manager 명령을 사용해서 프로젝트를 초기화하면 `package.json` 파일이 자동으로 생성된다.

    npm init -y

기본적인 메타데이터가 생성되고, 폴더의 이름(`pwd`)이 프로젝트의 이름이 된다.

### package.json

- 메타데이터 수정
  - 프론트엔드 프로젝트라면, `"source":"index.html"`로 바꾸기.
  - `author` 값 및 `license` 값 수정하기.

### .gitignore

- [.gitignore 파일 작성하기.](https://github.com/github/gitignore/blob/main/Node.gitignore)

&nbsp;

## TypeScript 설치하기

    npm i -D typescript

node_modules 폴더가 생성되고, 의존성 값이 `package.json` 파일에 추가되는 것을 확인할 수 있다.

&nbsp;

    npx tsc --init

### tsconfig.json

- compilerOptions
  - `jsx` 속성 되살리기.

&nbsp;

## React 설치하기

    npm i react react-dom
    
    npm i -D @types/react @types/react-dom
