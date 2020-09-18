
module.exports = {
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/svgrMock.js",
    '\\.(css|less|png|svg)$': '<rootDir>/src/config/cssImportFix.js',

  },
  "moduleDirectories": ["node_modules", "src"]
}