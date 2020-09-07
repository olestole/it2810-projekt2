// Put created types in this file
export type Gender = 'male' | 'female';

export interface User {
  name: string;
  song: string;
  imageUrl: string;
  gender: Gender;
  age: number;
  liked: boolean;
}

export interface UserCollection {
  users: User[];
}
