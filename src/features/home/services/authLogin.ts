import axios from 'axios';

import { url, headers } from '../constants/services';

export const authLogin = async () => {
  const urlFetchInit = `${url}/user.json`;

  try {
    const response = await axios.get(urlFetchInit, {
      headers: headers,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
