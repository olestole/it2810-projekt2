import { IPoem } from 'types';
import axios from 'axios';

const baseURL = 'https://poetrydb.org/';

export const fetchPoem = async (poemTitle: string) => {
  const url = baseURL + 'lines/' + poemTitle + '/author,title,lines.json';
  try {
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
