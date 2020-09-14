import React from 'react';
import { User } from 'types';

import { initialUsers } from './UserInitialization';

export type AppState = {
  users: User[];
  currentUser: User | null;
};

export type AppAction =
  | { type: 'setName'; targetUser: string; payload: string }
  | { type: 'setCurrentUser'; payload: User | null };

export const initialAppState: AppState = {
  users: initialUsers,
  currentUser: null,
};

export interface AppContextType {
  appState: AppState;
  appDispatch: React.Dispatch<AppAction>;
}

const AppContext = React.createContext({} as AppContextType);
export default AppContext;
