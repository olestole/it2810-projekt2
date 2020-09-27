import '@testing-library/jest-dom/extend-expect';
import { AppState } from 'utils/AppContext';
import { User } from 'types';
import { addFilter, removeFilter } from 'components/Filter';

describe('Functions', () => {
  let testUser: User = {
    name: 'Terry',
    song: 'song5',
    picture: 'man1',
    animation: 'stars',
    gender: 'male',
    age: 33,
    liked: false,
    favAuthor: 'William Shakespeare',
  };

  it('addFilter', () => {
    let appState: AppState = {
      users: [testUser],
      currentUser: null,
      darkmode: true,
    };
    expect(addFilter('stars', appState)).toStrictEqual(['stars']);
    expect(addFilter('stars', appState).length).toBe(1);
  });

  it('removeFilter', () => {
    let appState: AppState = {
      users: [testUser],
      currentUser: null,
      filter: ['sun', 'stars'],
      darkmode: true,
    };
    expect(removeFilter('stars', appState)).toStrictEqual(['sun']);
  });
});
