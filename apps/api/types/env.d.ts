declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PASSWORD_HASH_KEY: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
    }
  }
}

export {}
