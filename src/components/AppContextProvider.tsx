import React, { useReducer } from 'react';
import { initialAppState } from 'utils/AppContext';
import AppContext from 'utils/AppContext';
import reducer from 'utils/AppReducer';

const AppContextProvider = ({ children }: any) => {
  const [appState, appDispatch] = useReducer(reducer, initialAppState);

  return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
