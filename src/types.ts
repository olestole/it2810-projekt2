// Put created types in this file
export type Gender = 'male' | 'female';

export interface User {
  name: string;
  song: string;
  picture: SVGUserType;
  animation: AnimationType;
  gender: Gender;
  age: number;
  liked: boolean;
  favAuthor: string;
}

export interface UserCollection {
  users: User[];
}

export interface IPoem {
  title: string;
  author: string;
  lines: string[];
  linecount: number;
}

export type FilterType = Gender | AnimationType;

export type ProfileFilter = (user: User) => boolean;

export type AnimationType = 'cloud' | 'stars' | 'heart' | 'sun';

export type SVGUserType = 'man1' | 'man2' | 'man3' | 'man4' | 'man5' | 'woman1' | 'woman2' | 'woman3' | 'woman4';
