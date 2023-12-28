import axios from 'axios';

export const baseURL: string =
  process.env.BASE_URL ?? 'http://65.109.38.98:3001/'; // Replace with your API's base URL

const apiClient = axios.create({
  baseURL,
});
export default apiClient;

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
