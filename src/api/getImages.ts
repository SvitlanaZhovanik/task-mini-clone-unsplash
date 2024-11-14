import axios from 'axios';
const API_URL = 'https://api.unsplash.com/';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] =
  `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`;

export const getImages = async ({ page = 1 }) => {
  try {
    const res = await axios.get(`photos?page=${page}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getImage = async (slug: string) => {
  try {
    const res = await axios.get(`photos/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
export const getCollection = async (slug: string, page: number) => {
  try {
    const res = await axios.get(`search/photos?query=${slug}&page=${page}`);
    return res.data.results;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
