import { useApi } from '@hooks/useApi';
import { StudentModel } from '@resources/models/student.model';

export function useGetStudentList() {
  const [res, execute] = useApi<{
    message: string;
    data: [StudentModel];
  }>(
    {
      url: '/students/list',
      method: 'GET',
    },
    { manual: true }
  );

  return [execute, res] as const;
}

export function usePostStudent() {
  const [res, execute] = useApi<{ message: string; result: any }>(
    {
      url: '/students/create',
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  return [execute, res] as const;
}

export function useDeleteStudent() {
  const [res, execute] = useApi<{ message: string; result: any }>(
    {
      url: '/students/delete',
      method: 'DELETE',
    },
    {
      manual: true,
    }
  );

  return [execute, res] as const;
}
