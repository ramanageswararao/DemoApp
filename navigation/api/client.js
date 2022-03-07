import axios from 'axios';

const apiClient = axios.create({
  baseURL:
    'https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce',
});

export default apiClient;
