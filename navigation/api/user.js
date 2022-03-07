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

// let requestUrl = "https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice"

// export default getUsers =  () => {
//   fetch(requestUrl).then((response) => response.json()).then((json) => {

//     // console.log(json);

//   const users = json.map(item => {
//     return {
//       FirstName: item.First_Name__c,
//       Id: item.Id,
//       Age: item.Age__c,
//       LastName:item.Last_Name__c
//     };
//   });

//   return users;

//    }).catch((error) => {
//      console.log(error);
//    })

// };
