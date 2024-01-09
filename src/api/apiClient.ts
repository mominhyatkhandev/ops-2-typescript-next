import axios from 'axios';

export const baseURL: string =
  process.env.BASE_URL ?? 'https://5ade-43-224-238-194.ngrok-free.app/'; // Replace with your API's base URL

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
