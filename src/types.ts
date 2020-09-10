import { ReactInstance } from "react";

// Put created types in this file
export type Gender = 'male' | 'female';

export interface User {
  name: string;
  song: string;
  picture: React.FunctionComponent;
  animation: React.FunctionComponent;
  gender: Gender;
  age: number;
  liked: boolean;
  poemTitle: string;
}

export interface UserCollection {
  users: User[];
}

export interface IPoem {
  title: string;
  author: string;
  lines: string[];
}
