import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import * as renderer from 'react-test-renderer';
import AppContextProvider from '../components/AppContextProvider';
import App from '../components/App';

describe('Whole page', () => {
  it('matches the snapshot', () => {
    const wholePage = renderer.create(
      <AppContextProvider>
        <App />
      </AppContextProvider>,
    );

    expect(wholePage).toMatchSnapshot();
  });
});
