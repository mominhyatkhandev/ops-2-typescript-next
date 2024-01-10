import axios from 'axios';

export const baseURL: string =
  process.env.BASE_URL ?? 'https://2e61-43-224-238-194.ngrok-free.app/'; // Replace with your API's base URL

const apiClient = axios.create({
  baseURL,
});

// Initialize loading state
let loading = false;

// Request interceptor
apiClient.interceptors.request.use((config) => {
  // Set loading to true before the request is sent

  loading = true;
  console.log('loading in config', loading);
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    // Set loading to false when the response is received
    loading = false;
    console.log('loading in use', loading);

    return response;
  },
  (error) => {
    // Set loading to false in case of an error
    loading = false;

    console.log('loading in error', loading);

    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        'Response error apiClient:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Request error apiClient:', error.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }

    // Return the error so that it can be handled further
    return Promise.reject(error);
  },
);

// Export the loading state along with the apiClient
export { apiClient, loading };

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
