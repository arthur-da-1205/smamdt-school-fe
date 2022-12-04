import { http } from '@libraries/axios';
import useAxios, { configure } from 'axios-hooks';
import LRU from 'lru-cache';

const cache = new LRU({ max: 10 });

configure({ axios: http, cache });

export const useApi = useAxios;
