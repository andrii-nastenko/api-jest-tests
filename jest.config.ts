import 'tsconfig-paths/register.js';
import 'setup/dotenv';
import {type Config} from 'jest';

const config: Config = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '.spec.ts$',
  globalSetup: '<rootDir>/setup/global-setup.ts',
  globalTeardown: '<rootDir>/setup/global-teardown.ts',
  moduleDirectories: ['node_modules', '<rootDir>'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['jest-extended/all', 'jest-expect-message'],
  testTimeout: 60 * 1000,
  reporters: [
    'default',
    ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}],
    // additional reporters, like testrail-reporter
  ],
};

export default config;
