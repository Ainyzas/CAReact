import axios from 'axios';
import env from 'react-dotenv';

const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=lt&pageSize=12';
const { API_KEY } = env;

export async function fetchNews(category, page) {
  try {
    let FULL_URL;
    if (category === undefined) {
      FULL_URL = `${NEWS_URL}&page=${page}&apiKey=${API_KEY}`;
    } else {
      FULL_URL = `${NEWS_URL}&page=${page}&category=${category}&apiKey=${API_KEY}`;
    }
    const res = await axios.get(FULL_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
