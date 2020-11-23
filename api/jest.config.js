module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
      "node_modules",
      "<rootDir>/dist/",
      "<rootDir>/src/test-utils/",
      "<rootDir>/src/database/",
      "interfaces",
      "jestGlobalMocks.ts",
      "<rootDir>/src/config/",
      "<rootDir>/src/lib/",
      "<rootDir>/src/index.ts",
      ".mock.ts"
  ],
  testPathIgnorePatterns:[
    "node_modules",
    "<rootDir>/dist/",
    "<rootDir>/src/test-utils/",
    "<rootDir>/src/database/",
    "interfaces",
    "jestGlobalMocks.ts",
    "<rootDir>/src/config/",
    "<rootDir>/src/lib/",
    "<rootDir>/src/index.ts",
    ".mock.ts"
  ]
};
