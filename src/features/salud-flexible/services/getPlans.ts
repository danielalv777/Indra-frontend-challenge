import axios from 'axios';

import { url, headers } from '../../home/constants/services';

export const getPlans = async () => {
  const urlFetchInit = `${url}/plans.json`;

  try {
    const response = await axios.get(urlFetchInit, {
      headers: headers,
    });

    if (response.status === 200) {
      return response.data.list;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
