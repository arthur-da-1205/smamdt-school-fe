import { LocalStorage } from '@libraries/storage';
import Axios from 'axios';

export const http = Axios.create({
  timeout: 20 * 1000,
  baseURL: import.meta.env.VITE_REST_URL,
});

http.interceptors.request.use((req: any) => {
  const token: string | null = LocalStorage.getItem('user_token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
