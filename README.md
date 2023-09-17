# frontend-survival-week01

프론트엔드 생존코스 1주차 과제


# 자바스크립트(Node.js) 개발환경 세팅
    ## 노드 설치
        ### FNM 설치(nvm보다 실행이 빠르다)
            
            ```bash
            brew install fnm
            	# 프로파일에 직접 입력
            	#open ~/.zshrc #zhsrc 프로파일 오픈
            	#eval "$(fnm env --use-on-cd)# 파일에서 코드 추가
            # 터미널에서 그대로 입력
            eval "$(fnm env)"
            ```
            
        ### Node.js 설치
            
            ```bash
            fnm ls-remote
            fnm install --lts # 이미 설치됨(v18.17.1 (x64))
            fnm use lts-latest # 최신버전 사용
            fnm default $(fnm current) # 기본세팅으로 현재 버전을 사용하도록 세팅
            ```
            
        ### NPM 업그레이드
            
            ```bash
            npm install -g npm
            ```
            
        ### 프로젝트 폴더 생성
            
            ```bash
            mkdir projects
            cd projects
            fnm use default
            echo "$(fnm current)" > .nvmrc
            ```
            
        ### 프로젝트 초기화
            
            ```bash
            npm init
            
            ## 질의 시작
            package name: (studyjavascript)
            version: (1.0.0) 0.0.1
            description: project for practice javascript
            entry point: (index.js)
            test command:
            git repository:
            keywords:
            author: csh
            license: (ISC)
            About to write to /Users/csh/Desktop/projects/StudyJavascript/package.json:
            
            {
              "name": "studyjavascript",
              "version": "0.0.1",
              "description": "project for practice javascript",
              "main": "index.js",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
              },
              "author": "csh",
              "license": "ISC"
            }
            
            Is this OK? (yes) yes
            ## 질의 종료
            ```
            
        ### .gitignore
            
            ```bash
            touch .gitignore
            #ls -al
            ```
            
            .gitignore 파일을 생성 후 ls -al 명령어로 확인
            
        ### TypeScript
            
            ```bash
            npm i -D typescript
            
            npx tsc --init
            ```
            
            tsconfig.js (파일 수정)설정
            
            ```json
            "jsx": "react-jsx",
            ```
            
    ## ESLint 
        ### 설치
            
            ```bash
            npm i -D eslint
            npx eslint --init
            ```
            
            ```bash
            You can also run this command directly using 'npm init @eslint/config'.
            ✔ How would you like to use ESLint? · style
            ✔ What type of modules does your project use? · esm
            ✔ Which framework does your project use? · react
            ✔ Does your project use TypeScript? · No / Yes
            ✔ Where does your code run? · browser
            ✔ How would you like to define a style for your project? · guide
            ✔ Which style guide do you want to follow? · xo-typescript
            ✔ What format do you want your config file to be in? · JavaScript
            Checking peerDependencies of eslint-config-xo-typescript@latest
            Checking peerDependencies of eslint-config-xo@latest
            The config that you've selected requires the following dependencies:
            
            eslint-plugin-react@latest eslint-config-xo@latest eslint@>=8.0.0 eslint-config-xo-typescript@latest @typescript-eslint/eslint-plugin@>=6.0.0 @typescript-eslint/parser@>=6.0.0 typescript@>=4.7
            ✔ Would you like to install them now? · No / Yes
            ✔ Which package manager do you want to use? · npm
            ```
            
        ### .eslintrc.js 수정
            
            ```jsx
            module.exports = {
            	env: {
            		browser: true,
            		es2021: true,
            		**jest: true,	// 미리 설치**
            	},
            	extends: [
            		'xo',
            		'plugin:react/recommended',
            	],
            	overrides: [
            		{
            			env: {
            				node: true,
            			},
            			files: [
            				'.eslintrc.{js,cjs}',
            			],
            			parserOptions: {
            				sourceType: 'script',
            			},
            		},
            		{
            			extends: [
            				'xo-typescript',
            			],
            			files: [
            				'*.ts',
            				'*.tsx',
            			],
            		},
            	],
            	parserOptions: {
            		ecmaVersion: 'latest',
            		sourceType: 'module',
            	},
            	plugins: [
            		'react',
            	],
            	rules: {
            	},
            };
            ```
            
        ### .eslintignore 세팅
            
            ```bash
            touch .eslintignore
            ```
            
            /node_modules/
            /dist/
            /.parcel-cache/
        
    ## React 설치
        
        ```bash
        npm i react react-dom
        
        npm i -D @types/react @types/react-dom
        ```
        
    ## Jest 설치
        ### install
            
            ```bash
            npm i -D jest @types/jest @swc/core @swc/jest \
                jest-environment-jsdom \
                @testing-library/react @testing-library/jest-dom
            ```
            
        ### jest.config.js 파일을 작성해 테스트에서 SWC를 사용 [참조자료](http://GitHub.com/ahastudio/CodingLife/blob/main/20220726/react/jest.config.js)
            
            ```bash
            touch jest.config.js
            ```
            
        
    ## Parcel 설치
        
        ```bash
        npm i -D parcel
        ```
        
    ## package.json 수정
        
        ```jsx
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
