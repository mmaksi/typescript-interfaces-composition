module.exports = {
  // The root of your source code (adjust this if your code is in a different directory)
  roots: ["<rootDir>/src"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],

  // Transform files with ts-jest for TypeScript support
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { esModuleInterop: true }],
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
