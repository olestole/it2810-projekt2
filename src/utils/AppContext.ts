import React from 'react';
import { FilterType, User } from 'types';

import { initialUsers } from './UserInitialization';

export type AppState = {
  users: User[];
  currentUser: User | null;
  filter?: FilterType[];
  darkmode: boolean;
};

export type AppAction =
  | { type: 'setName'; targetUser: string; payload: string }
  | { type: 'setCurrentUser'; payload: User | null }
  | { type: 'setFilter'; payload: FilterType }
  | { type: 'removeFilter'; payload: FilterType }
  | { type: 'darkmode' }
  | { type: 'likeUser'; payload: User };

const sverre: User = {
  name: 'Sverre',
  song: 'Hmmm',
  picture: 'man1',
  animation: 'cloud',
  gender: 'male',
  age: 23,
  liked: false,
  favAuthor: 'William Shakespear',
};

export const initialAppState: AppState = {
  users: initialUsers,
  currentUser: null,
  darkmode: false,
};

export interface AppContextType {
  appState: AppState;
  appDispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContextType);
export default AppContext;
