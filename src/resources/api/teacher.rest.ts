import { useApi } from '@hooks/useApi';
import { TeacherModel } from '@resources/models/teacher.model';

export function useGetTeacherList() {
  const [res, execute] = useApi<{
    message: string;
    data: [TeacherModel];
  }>(
    {
      url: '/teachers/list',
      method: 'GET',
    },
    { manual: true }
  );

  return [execute, res] as const;
}
