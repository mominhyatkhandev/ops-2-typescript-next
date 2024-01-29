// api/apiClient.js

import axios from 'axios';

export const baseURL =
  process.env.BASE_URL || 'https://2e8a-43-224-238-194.ngrok-free.app/'; // Replace with your API's base URL

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.response.use(
  (response) => {
    console.log('API CLIENT WALA RESPONSE', response);

    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        'Response error apiClient:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.log('Request error apiClient:', error.message);
    } else {
      console.error('Network Error ----Something went wrong:', error.message);
    }
    return Promise.reject(error);
  },
);

export default apiClient;

// PRIMARY CODE

/* eslint-disable import/no-mutable-exports */
// import axios from 'axios';

// export const baseURL: string =
//   process.env.BASE_URL ?? 'https://2eed-43-224-238-194.ngrok-free.app/'; // Replace with your API's base URL

// const apiClient = axios.create({
//   baseURL,
// });

// // Initialize isLoading state
// let isLoading: boolean = false;
// let isError = false;

// // Request interceptor
// apiClient.interceptors.request.use((config) => {
//   // Set isLoading to true before the request is sent

//   isLoading = true;
//   console.log('isLoading in config', isLoading);
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => {
//     // Set isLoading to false when the response is received
//     isLoading = false;
//     console.log('isLoading in use', isLoading);

//     return response;
//   },
//   (error) => {
//     isLoading = false;
//     isError = true;

//     console.log('isLoading in error', isLoading);

//     if (error.response) {
//       console.error(
//         'Response error apiClient:',
//         error.response.status,
//         error.response.data,
//       );
//     } else if (error.request) {
//       console.log('Request error apiClient:', error.message);
//     } else {
//       console.error('Something went wrongError:', error.message);
//     }

//     // Return the error so that it can be handled further
//     return Promise.reject(error);
//   },
// );

// // Export the isLoading state along with the apiClient
// export { apiClient, isError, isLoading };

// OLD CODE

// const ApiClient = () => {
//   const defaultOptions = {
//     baseURL,
//   };

//   const instance = axios.create(defaultOptions);

//   instance.interceptors.request.use(async (request) => {
//     const session = await getSession();
//     if (session) {
//       request.headers.Authorization = `Bearer ${session.jwt}`;
//     }
//     return request;
//   });

//   instance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       console.log(`error`, error);
//     }
//   );

//   return instance;
// };

// export default ApiClient();
