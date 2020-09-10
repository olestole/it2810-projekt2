import React from 'react';
import { User } from 'types';

export type AppState = {
  users: User[];
};

export type AppAction = { type: 'setName'; targetUser: string; payload: string };

const sverre: User = {
  name: 'Sverre',
  song: 'Hmmm',
  imageUrl: 'www.vg.no',
  gender: 'male',
  age: 23,
  liked: false,
};

export const initialAppState: AppState = {
  users: [sverre],
};

export interface AppContextType {
  appState: AppState;
  appDispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContextType);
export default AppContext;
