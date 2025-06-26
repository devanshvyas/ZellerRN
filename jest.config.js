module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|@expo" +
      "|expo(nent)?" +
      "|expo-router" +
      "|aws-amplify" +
      "|@aws-amplify" +
      "|uuid" +
      ")",
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/jest.setup.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // include only app code
    "!**/__tests__/**", // exclude test files
    "!**/node_modules/**",
    "!**/jest.setup.ts",
  ],
};
