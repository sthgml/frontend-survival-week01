module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
    './jest.setup.js',
	],
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest', {
			jsc: {
				parser: {
					syntax: 'typescript',
					jsx: true,
				},
				transform: {
					react: {
						runtime: 'automatic',
					},
				},
			},
		}],
	},
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/dist/',
	],
};
