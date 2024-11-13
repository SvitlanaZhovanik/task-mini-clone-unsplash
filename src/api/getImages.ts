import axios from 'axios';
const API_URL = 'https://api.unsplash.com/';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] =
  `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`;

export const getImages = async ({ page = 1 }) => {
  const res = await axios.get(`photos?per_page=20&page=${page}`);
  return res.data;
};

export const getImage = async (slug: string) => {
  const res = await axios.get(`photos/${slug}`);
  return res.data;
};
