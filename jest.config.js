const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  modulePathIgnorePatterns: ["__tests__/e2e"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@src(.*)$": "<rootDir>/src$1",
  },
};
module.exports = createJestConfig(customJestConfig);
