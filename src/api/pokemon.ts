import { get } from 'utils/http';
import logger from 'utils/logger';

export const fetchAll = async () => {
  try {
    const response = await get('/pokemon');
    return response?.data;
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to fetch data from the API.');
  }
};
