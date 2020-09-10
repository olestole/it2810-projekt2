import { AppAction, AppState } from './AppContext';
import { User } from 'types';

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
    default:
      return state;
  }
};

export default reducer;
