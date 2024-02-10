import axios from "axios";

import { envConfig } from "../config";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function getRefreshToken() {
  // Use a cookie parsing library or document.cookie to retrieve the token
  // Example using document.cookie:
  const cookies = document.cookie.split("; ");
  const accessTokenCookie = cookies.find((cookie) => cookie.startsWith("accessToken="));
  return accessTokenCookie ? accessTokenCookie.split("=")[1] : null;
}

const instance = axios.create({
  baseURL: envConfig.serverUrl + "/api/v1",
  withCredentials: true, // Include credentials (e.g., cookies) in requests
});

// Add a request interceptor to attach the access token to each request
instance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration and refreshing
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh the token by making a request to your server
        const response = await instance.post("/refresh-token", {
          refreshToken: getRefreshToken(),
        });

        const newAccessToken = response.data.accessToken;

        // Update the access token in your storage
        // setAccessToken(newAccessToken);

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        // Handle refresh error (e.g., redirect to login)
        // handleRefreshError(refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;