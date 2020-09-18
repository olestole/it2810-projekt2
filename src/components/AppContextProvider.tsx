import React, { useReducer } from 'react';
import { initialAppState } from 'utils/AppContext';
import AppContext from 'utils/AppContext';
import reducer from 'utils/AppReducer';

const AppContextProvider = ({ children }: any) => {
  let localStorageState;

  if (localStorage.getItem('context')) {
    localStorageState = JSON.parse(localStorage.getItem('context') as string);
  }
  const [appState, appDispatch] = useReducer(reducer, localStorageState ? localStorageState : initialAppState);

  return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
