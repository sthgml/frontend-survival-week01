module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect', // 는 사실 설치를 위에서 하긴 함
		'./jest.setup', // 이건 안쓴다 지워
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
