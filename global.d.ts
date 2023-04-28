declare global {
  namespace NodeJS {
    type ProcessEnv = Record<string, string>;
  }
}

export {};
