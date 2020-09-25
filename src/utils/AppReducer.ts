import { AppAction, AppState } from './AppContext';
import { User } from 'types';
import { addFilter, removeFilter } from 'components/Filter';

type appReducer = (prevState: AppState, action: AppAction) => AppState;

const reducer: appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'setCurrentUser':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'setName':
      const userIndex = state.users.findIndex((user: User) => user.name === action.targetUser);
      if (userIndex === -1) {
        return state;
      }
      const usersCopy = [...state.users];
      usersCopy[userIndex].name = action.payload;
      return {
        ...state,
        users: usersCopy,
      };
    case 'setLiked':
      const userI = state.users.findIndex((user: User) => user.name === action.targetUser);
      const usersCopied = [...state.users];
      let newUser: User = { ...usersCopied[userI], liked: !usersCopied[userI].liked };
      usersCopied[userI] = newUser;
      return {
        ...state,
        users: usersCopied,
      };
    case 'setFilter':
      return {
        ...state,
        filter: addFilter(action.payload, state),
      };
    case 'removeFilter':
      return {
        ...state,
        filter: removeFilter(action.payload, state),
      };
    case 'darkmode':
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
};

export default reducer;
