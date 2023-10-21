# frontend-survival-week01

## 프론트엔드 생존코스 1주차 과제 - 개발 환경 세팅

### JavaScript 개발 환경 (Node.js) 세팅

- fnm 설치 : brew install fnm
- node LTS버전 설치 : fnm install --lts
- 설치된 상태 확인 : fnm list
- 설치된 버전 확인 : node -v

### TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

1. 작업 폴더 준비
    - mkdir my-app
    - cd my-app
    - code .

2. npm 패키지 준비(기본값)
    - npm init -y

3. .gitignore 파일 생성

4. 타입스크립트 설정
    - npm i -D typescript
    - npx tsc --init

5. tsconfig.json에서 jsx속성 열어두기
    - "jsx": "react-jsx"

6. ESLint 설정
    - npm i -D eslint
    - npx eslint --init
        선택 참고 : style / javaScript / React / Typescript / Browser / Popular style guide / XO / JavaScript / npm

7. .eslintrc.js 파일을 적절히 수정한다.
    - 아직 Jest를 설치하지 않았지만, 여기서 미리 env속성 안에 jest: true를 잡아주면 좋다.

8. .eslintignore 파일 생성
    - /node_modules/
    - /dist/
    - /.parcel-cache/

9. 리액트 설치
    - npm i react react-dom
    - npm i -D @types/react @types/react-dom

10. 테스팅 도구 설치
    - npm i -D jest @types/jest @swc/core @swc/jest \jest-environment-jsdom \@testing-library/react @testing-libraryjest-dom@5.16.4

11. jest.config.js 파일을 작성해 테스트에서 SWC를 사용하자.

12. Parcel 설치
    - npm i -D parcel

13. package.json 파일의 scripts를 적절히 수정한다.

14. package.json의 main 속성을 "source": "index.html"으로 변경

15. parcel 설정
    - parcel-reporter-static-files-copy 패키지 설치 후 `.parcelrc` 파일 작성.(npm install -D parcel-reporter-static-files-copy)
    - 이렇게 하면 static 폴더의 파일을 정적 파일로 Serving할 수 있다(이미지 등 Assets).

16. .vscode/settings.json파일을 추가해 JS/TS 파일을 저장할 때마다 ESLint를 실행하고 문제점을 고치게 설정할 수 있다.
