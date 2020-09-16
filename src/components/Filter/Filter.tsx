import React, { useContext } from 'react';
import AppContext, { AppState } from 'utils/AppContext';

import { FilterType, ProfileFilter, User } from 'types';

import './filter.css';

const Filter = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const possibleFilters: FilterType[] = ['cloud', 'stars', 'heart', 'sun', 'male', 'female'];

  const handleFilter = (e: any, filter: FilterType) => {
    console.log(e.target.checked);

    e.target.checked
      ? appDispatch({ type: 'setFilter', payload: filter })
      : appDispatch({ type: 'removeFilter', payload: filter });
  };

  return (
    <div className="filterBoxCollection">
      {possibleFilters.map((filter: FilterType, index: number) => (
        <div key={index} className="filterBox">
          <label className="checkBoxText" htmlFor="checkBox">
            {filter}
          </label>
          <input className="checkBox" type="checkbox" onClick={(e) => handleFilter(e, filter)}></input>
        </div>
      ))}
    </div>
  );
};

export const addFilter = (payload: FilterType, state: AppState) => {
  let newFilter;
  let newPredicate;
  if (['male', 'female'].includes(payload)) {
    newPredicate = (user: User) => user.gender === payload;
  } else {
    newPredicate = (user: User) => user.animation === payload;
  }

  if (state.filter) {
    newFilter = [...state.filter, newPredicate];
  } else {
    newFilter = [newPredicate];
  }
  return newFilter;
};

export const removeFilter = (payload: FilterType, state: AppState) => {
  const newFilter = [...state.filter!];
  let newPredicate: ProfileFilter;

  if (['male', 'female'].includes(payload)) {
    newPredicate = (user: User) => user.gender === payload;
  } else {
    newPredicate = (user: User) => user.animation === payload;
  }

  if (state.filter) {
    const oldFilterIndex = state.filter.indexOf(newPredicate);
    console.log(state.filter[oldFilterIndex]);
    newFilter.splice(oldFilterIndex, 1);
  }
  return newFilter;
};

export default Filter;
