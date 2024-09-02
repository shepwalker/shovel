module.exports = {
  modulePaths: ["<rootDir>", "<rootDir>/node_modules"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  roots: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ["/node_modules/"]
};