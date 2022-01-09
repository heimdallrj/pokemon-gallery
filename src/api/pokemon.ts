import { get } from 'utils/http';

export const fetch = async (offset = 0, limit = 50) =>
  get(`/pokemon/?limit=${limit}&offset=${offset}`);

export const fetchOne = async (nameOrId: string) => get(`/pokemon/${nameOrId}`);
