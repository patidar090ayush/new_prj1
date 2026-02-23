import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// request interceptor
api.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor------>:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
api.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor----->:", response);
    return response;
  },
  (error) => Promise.reject(error)
);

export default api;


// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://fakestoreapi.com",
// });

// export default api;