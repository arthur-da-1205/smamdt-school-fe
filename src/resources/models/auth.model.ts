export type AuthModel = {
  tokenData: { expiresIn: number; token: string };
  role: string;
};
