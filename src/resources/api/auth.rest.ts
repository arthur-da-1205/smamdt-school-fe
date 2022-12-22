import { useApi } from '@hooks/useApi';

export function useLogin() {
  const [res, execute] = useApi<{
    message: string;
    data: {
      tokenData: { expiresIn: number; token: string };
      role: string;
    };
  }>(
    {
      url: '/auth/login',
      method: 'POST',
    },
    { manual: true }
  );

  return [execute, res] as const;
}
