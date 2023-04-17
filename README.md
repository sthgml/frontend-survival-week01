# React + Typescript + Parcel 개발환경 세팅하기

## 1) 프로젝트 생성하기

```shell
$npm init -y
```

- 위 명령어를 실행하여 프로젝트에 관한 정보와 패키지매니저(npm)을 통해 설치한 모듈 의존성을 관리할 수 있도록 package.json 을 생성한다.
- option: `-y` 별도 설정없이 `default` 값으로 옵션을 생성

## 2) Typescript

- 타입스크립트 의존성 설치하기
  - 배포 시 필요한 의존성인 경우를 제외하고 모두 `-D` 개발환경에서 사용하는 옵션으로 의존성추가

```shell
$npm install typescript -D
```

### 2-1) 타입스크립트 설정하기

- 하기 명령어로 타입스크립트 설정파일을 초기생성한다.
  - `npm` 은 패키지 관리기
  - `npx` 는 패키지 실행기  

```shell
$npx tsc --init
```

### 2-2) 타입스크립트 컴파일 옵션 설정하기

- `module` : **exnext**  버전으로 기재하여 최신 문법을 사용할 수 있도록 설정

## 3) ESLint

```shell
$npm install eslint -D
```

### 3-1) ESLint 설정하기

- 잘 만들어진 설정을 이용하자 <br />
  ㄴ style guide 는 `xo-typescript` 를 따른다 <br />
  ㄴ 나만의 eslint 만들어 공유 시 참고하면 좋은 자료: [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs.html)

```shell
$npx eslint --init
```

<img width="837" alt="image" src="https://user-images.githubusercontent.com/89110544/232491480-7222315b-75a8-4c52-a327-feabf757258b.png">

### 3-2) vscode 설정과 함께 사용하기

- 하기 옵션 설정으로 파일 저장 시 바로 린트 룰에 따라 코드 수정

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

- eslint 에서 indent 를 맞추더라고, vscode 에서 추가 설정해줘야 정상적으로 반영

<img width="837" alt="image" src="https://user-images.githubusercontent.com/89110544/232503972-78588b28-12e8-4c74-b361-778611ba9bb4.png">

- 이슈사항 
```json
{
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
}
```

## 4) React

```shell
$npm install react react-dom
$npm install -D @types/react @types/react-dom
```

## 5) Jest

```shell
$npm install -D @types/jest @swc/core @swc/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### 5-1) 테스트 설정하기
