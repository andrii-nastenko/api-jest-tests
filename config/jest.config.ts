import 'tsconfig-paths/register.js';
import 'config/dotenv';
import {type Config} from 'jest';

const config: Config = {
  rootDir: './../',
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
  testTimeout: 60 * 1000,
};

export default config;
