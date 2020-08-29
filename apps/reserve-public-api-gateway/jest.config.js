module.exports = {
  name: 'reserve-public-api-gateway',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/apps/reserve-public-api-gateway',
};
