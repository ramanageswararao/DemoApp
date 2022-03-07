import axios from 'axios';

// import cache from '../utility/cache';

const apiClient = axios.create({
  baseURL: 'https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce',
});

/*

https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice

! caching without redux

const get = apiClient.get;

//^ altering the get()
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data); //* caching the response
    return response;
  }

  const data = await cache.get(url); //* retrieving the data from the cache
  return data ? {ok: true, data} : response;
};

*/

export default apiClient;
