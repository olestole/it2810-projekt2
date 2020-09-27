import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import * as renderer from 'react-test-renderer';
import { AppContextProvider } from '../components/Context';
import App from '../components/App';
import ReactDOM from 'react-dom';

describe('Whole page', () => {
  it('matches the snapshot', () => {
    // Needs this hack in order to render the react-modal properly. Read more here: https://github.com/facebook/react/issues/11565
    // @ts-ignore
    ReactDOM.createPortal = (node) => node;

    const wholePage = renderer.create(
      <AppContextProvider>
        <App />
      </AppContextProvider>,
    );

    expect(wholePage).toMatchSnapshot();
  });
});
