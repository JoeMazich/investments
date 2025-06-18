export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@app': '<rootDir>/src/app',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@assets': '<rootDir>/src/assets',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@components': '<rootDir>/src/components',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@redux': '<rootDir>/src/redux',
  },
  // coverageThreshold: {
  //   global: {
  //     statements: 80,
  //     branches: 70,
  //     functions: 75,
  //     lines: 80,
  //   },
  // },
  coverageReporters: ['text'],
}
