module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
      "node_modules",
      "<rootDir>/src/test-utils/",
      "interfaces",
      "jestGlobalMocks.ts",
      "<rootDir>/src/config/",
      "<rootDir>/src/lib/",
      "<rootDir>/src/index.ts",
      ".mock.ts"
  ],
};
