import React from 'react';
import { User } from 'types';
import { ReactComponent as Man1 } from '../components/SVG/man1.svg';
import { ReactComponent as Man2 } from '../components/SVG/man2.svg';
import { ReactComponent as Man3 } from '../components/SVG/man3.svg';
import { ReactComponent as Man4 } from '../components/SVG/man4.svg';
import { ReactComponent as Man5 } from '../components/SVG/man5.svg';
import { ReactComponent as Woman1 } from '../components/SVG/woman1.svg';
import { ReactComponent as Woman2 } from '../components/SVG/woman2.svg';
import { ReactComponent as Woman3 } from '../components/SVG/woman3.svg';
import { ReactComponent as Woman4 } from '../components/SVG/woman4.svg';

import { ReactComponent as Cloud } from '../components/SVG/cloud.svg';
import { ReactComponent as Stars } from '../components/SVG/stars.svg';

const user1: User = {
  name: 'Toby',
  song: 'Bitches and hoes',
  picture: Man1,
  animation: Stars,
  gender: 'male',
  age: 21,
  liked: false,
  poemTitle: 'Now I knew I lost her --',
};

const user2: User = {
  name: 'Thomas',
  song: 'Perfect Gentleman',
  picture: Man2,
  animation: Stars,
  gender: 'male',
  age: 23,
  liked: false,
  poemTitle: 'poem2',
};

const user3: User = {
  name: 'Albert',
  song: 'Sunday Best',
  picture: Man3,
  animation: Stars,
  gender: 'male',
  age: 22,
  liked: false,
  poemTitle: 'poem3',
};

const user4: User = {
  name: 'Bill',
  song: 'Ritual',
  picture: Man4,
  animation: Cloud,
  gender: 'male',
  age: 23,
  liked: false,
  poemTitle: 'poem4',
};

const user5: User = {
  name: 'Harry',
  song: 'Dear Boy',
  picture: Man5,
  animation: Cloud,
  gender: 'male',
  age: 25,
  liked: false,
  poemTitle: 'poem5',
};

const user6: User = {
  name: 'Sophie',
  song: 'Take me out',
  picture: Woman1,
  animation: Cloud,
  gender: 'female',
  age: 21,
  liked: false,
  poemTitle: 'poem6',
};

const user7: User = {
  name: 'Astrid',
  song: 'Be as you are',
  picture: Woman2,
  animation: Cloud,
  gender: 'female',
  age: 22,
  liked: false,
  poemTitle: 'poem7',
};

const user8: User = {
  name: 'Mary',
  song: 'Easy Love',
  picture: Woman3,
  animation: Cloud,
  gender: 'female',
  age: 18,
  liked: false,
  poemTitle: 'poem8',
};

const user9: User = {
  name: 'Selina',
  song: 'When the party`s over',
  picture: Woman4,
  animation: Cloud,
  gender: 'female',
  age: 20,
  liked: false,
  poemTitle: 'poem9',
};

export type AppState = {
  users: User[];
  currentUser: User | null;
};

export type AppAction =
  | { type: 'setName'; targetUser: string; payload: string }
  | { type: 'setCurrentUser'; payload: User | null };

export const initialAppState: AppState = {
  users: [user1, user2, user3, user4, user5, user6, user7, user8, user9],
  currentUser: null,
};

export interface AppContextType {
  appState: AppState;
  appDispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContextType);
export default AppContext;
