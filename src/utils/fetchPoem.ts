import { IPoem } from 'types';
import axios from 'axios';

const baseURL = 'https://poetrydb.org/';

export const fetchPoem = async (favAuthor: string) => {
  const url = baseURL + 'author/' + favAuthor;
  try {
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
