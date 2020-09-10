import React from 'react';
import { User } from 'types';

export type AppState = {
  users: User[];
  currentUser: User | null;
};

export type AppAction =
  | { type: 'setName'; targetUser: string; payload: string }
  | { type: 'setCurrentUser'; payload: User | null };

const sverre: User = {
  name: 'Sverre',
  song: 'Hmmm',
  imageUrl: 'www.vg.no',
  gender: 'male',
  age: 23,
  liked: false,
  poemTitle: 'Now I knew I lost her --',
};

export const initialAppState: AppState = {
  users: [sverre],
  currentUser: null,
};

export interface AppContextType {
  appState: AppState;
  appDispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContextType);
export default AppContext;
