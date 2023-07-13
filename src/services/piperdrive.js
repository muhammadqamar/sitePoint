
import httpService from './http';

const getCompain = () => httpService
  .get(`/user-lms-settings`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  getUserLmsSettings,
};