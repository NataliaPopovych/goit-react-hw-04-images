import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const KEY = '38355159-bacd356c93a5482dc866a24cc';

export const dataQuery = async (query, page = 1) => {
  const params = {
    q: query,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  };
  const responce = await axios.get(`/`, { params });
  return responce.data;
};
