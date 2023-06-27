import axios from "axios";

const BASE_URL = "http://13.209.88.4:8080";

export const getArt = (userId) => {
  return axios.get(`${BASE_URL}/${userId}/articles`);
};

export const createArt = (userId, title, body) => {
  return axios.post(`${BASE_URL}/${userId}/articles`, {
    title,
    body,
  });
};

export const getArtById = (id) => {
  return axios.get(`${BASE_URL}/articles/${id}`);
};

export const deleteArt = (id) => {
  return axios.delete(`${BASE_URL}/articles/${id}`);
};

export const editArt = (id, title, body) => {
  return axios.put(`${BASE_URL}/articles/${id}`, {
    title,
    body,
  });
};
