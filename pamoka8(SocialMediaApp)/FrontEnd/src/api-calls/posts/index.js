import axios from 'axios';

const HOST = 'http://localhost:4000/api/posts';

export async function createNewPost({ body, userId }) {
  try {
    const res = await axios.post(HOST + '/post', { body, userId });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
