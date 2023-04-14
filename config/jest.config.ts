import 'tsconfig-paths/register.js';
import 'config/dotenv';
import type {Config} from 'jest';

const config: Config = {
  rootDir: './..',
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {'^.+\\.ts$': 'ts-jest'},
  globalSetup: '<rootDir>/setup/api-setup.ts',
};

export default config;
