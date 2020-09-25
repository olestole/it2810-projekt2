import React, { useContext } from 'react';
import AppContext, { AppState } from 'utils/AppContext';

import { FilterType, ProfileFilter, User } from 'types';

import './filter.css';
import 'components/main.css';

const Filter = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const possibleFilters: FilterType[] = ['cloud', 'stars', 'heart', 'sun', 'male', 'female'];

  const handleFilter = (e: any, filter: FilterType) => {
    e.target.checked
      ? appDispatch({ type: 'setFilter', payload: filter })
      : appDispatch({ type: 'removeFilter', payload: filter });
  };

  return (
    <div className="filterBoxCollection">
      {possibleFilters.map((filter: FilterType, index: number) => (
        <div key={index} className="filterBox">
          <p className="checkBoxText">{filter}</p>
          <input
            checked={
              !appState.filter
                ? false
                : appState.filter.findIndex((appFilter: FilterType) => appFilter == filter) !== -1
            }
            className="checkBox"
            type="checkbox"
            onClick={(e) => handleFilter(e, filter)}
          ></input>
        </div>
      ))}
    </div>
  );
};

export const addFilter = (payload: FilterType, state: AppState) => {
  let newFilter;

  if (state.filter) {
    newFilter = [...state.filter, payload];
  } else {
    newFilter = [payload];
  }
  return newFilter;
};

export const removeFilter = (payload: FilterType, state: AppState) => {
  const newFilter = [...state.filter!];

  const oldFilterIndex = state.filter!.indexOf(payload);
  newFilter.splice(oldFilterIndex, 1);
  return newFilter;
};

export const generateFilters = (filters: FilterType[]): ProfileFilter[] => {
  const filterCollection = [];

  if (filters) {
    for (const filter of filters) {
      if (['male', 'female'].includes(filter)) {
        filterCollection.push((user: User) => user.gender === filter);
      } else {
        filterCollection.push((user: User) => user.animation === filter);
      }
    }
  }

  return filterCollection;
};

export default Filter;
