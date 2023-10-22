module.exports = {
  // 실행 중에 각 개별 테스트를 보고해야 하는지 여부
  verbose: true,
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
  // 파일 경로가 패턴과 일치하면 변환되지 않음.
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
