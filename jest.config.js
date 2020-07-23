module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-localstorage-mock',
    '@testing-library/react/cleanup-after-each',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleNameMapper: {
  //   '^~/(.*)': '<rootDir>/src/$1',
  // },
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: ['!src/index.tsx', '!src/services/api.js'],
};
