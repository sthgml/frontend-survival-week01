# frontend-survival-week01

## 프론트엔드 생존코스 1주차 과제

### 1주차 환경설정

### 처음 실행할때, WSL을 설치해서 실행을 해야했다. 아래의 에러가 발생했을때

```bash
WslRegisterDistribution failed with error: 0x80370102
Please enable the Virtual Machine Platform Windows feature and
 ensure virtualization is enabled in the BIOS.
```

링크(<https://gallery-k.tistory.com/311>)

### 위의 사이트를 통해 해결하였으나, fnm 설치중 에러가 발생해 아래의 명령어를 통해해결하였다

```bash
fnm env --use-on-cd | Out-String | Invoke-Expression
```

## chocolate

### Chocolatey 는 Mac OS X 의 Homebrew 나 Linux 의 yum, apt-get 같은 역할을

### 수행하는 NuGet 기반의 윈도우용 패키지 관리자이다

scoop 에 비해 실행시 관리자 권한이 필요하다는 단점이 있지만 더 체계적으로 패키지를 관리하고 있다.
작업 폴더를 준비한다

```bash
mkdir my-app
```

```bash
cd my-app
```

여기서 바로 Visual Studio Code를 열면 편하다.

```bash
code .
```

npm 패키지를 준비하는 게 첫 번째 작업.
npm init -y
잊지 말고 .gitignore 파일을 작성한다.
최소한 node_modules를 통째로 커밋하는 황당한 일을 미연에 방지하자.
타입스크립트 설정

```bash
npm i -D typescript
```

npx tsc --init
tsconfig.json 파일의 jsx 속성 변경한다.
ESLint 설정
npm i -D eslint

npx eslint --init
.eslintrc.js 파일을 적절히 수정한다. 아직 Jest를 설치하지 않았지만, 여기서 미리 jest: true를 잡아주면 좋다.
잊지 않고 .eslintignore 파일을 작성한다.
리액트 설치
npm i react react-dom

npm i -D @types/react @types/react-dom
테스팅 도구 설치
npm i -D jest @types/jest @swc/core @swc/jest
    jest-environment-jsdom
    @testing-library/react @testing-library/jest-dom
jest.config.js 파일을 작성해 테스트에서 SWC를 사용하자.
