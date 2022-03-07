import apiClient from './client';

const endpoint = '/services/apexrest/apiservice';

const getUsers = async () => {
  const res = await apiClient.get(endpoint);
  const data = res.data;

  const users = await data.map(item => {
    return {
      firstName: item.First_Name__c,
      lastName: item.Last_Name__c,
      age: item.Age__c,
      id: item.Id,
    };
  });

  return users;
};

export default {getUsers};
