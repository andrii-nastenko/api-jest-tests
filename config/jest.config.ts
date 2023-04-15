import 'tsconfig-paths/register.js';
import 'config/dotenv';
import type {JestConfigWithTsJest} from 'ts-jest';

const config: JestConfigWithTsJest = {
  rootDir: './..',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '.spec.ts$',
  globalSetup: '<rootDir>/setup/api-setup.ts',
};

export default config;
