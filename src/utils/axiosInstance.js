import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:'http://localhost:3000/api',
    withCredentials:true
})

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
      
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
  
//         console.log("401 error caught. Attempting to refresh token.");
  
//         try {
//           const refreshResponse = await axiosInstance.post("/auth/refresh-token", null, {
//             withCredentials: true, 
//           });
  
//           const newAccessToken = refreshResponse.data.accessToken;
  
//           originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
  
//           return axiosInstance(originalRequest);
//         } catch (err) {
//           console.error("Token refresh failed:", err);
//           return Promise.reject(err);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
