// Configuration Axios pour appeler l'API backend

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Ajout automatique du token JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Gestion expiration token
api.interceptors.response.use(
  res => res,
  async err => {

    if (err.response?.status === 401) {

      const refresh = localStorage.getItem("refresh");

      const r = await axios.post(
        `${import.meta.env.VITE_API_URL}/refresh`,
        {
          token: refresh
        }
      );

      localStorage.setItem("token", r.data.access_token);

      err.config.headers.Authorization = `Bearer ${r.data.access_token}`;

      return axios(err.config);
    }

    return Promise.reject(err);
  }
);

export default api;