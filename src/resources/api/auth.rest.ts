import { useApi } from '@hooks/useApi';
import { AuthModel } from '@resources/models/auth.model';

export function useLogin() {
  const [res, execute] = useApi<{
    message: string;
    data: AuthModel;
  }>(
    {
      url: '/auth/login',
      method: 'POST',
    },
    { manual: true }
  );

  return [execute, res] as const;
}
