declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT?: string;
    }
  }
}