import React, { useContext, useState } from 'react';
import AppContext from 'utils/AppContext';
import './profile.css';

import { IPoem } from 'types';

import { fetchPoem } from 'utils/fetchPoem';

const Poem = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [currentPoem, setCurrentPoem] = useState<IPoem[] | undefined>();

  const getPoem = async () => {
    if (appState.currentUser) {
      const poemResponse = await fetchPoem(appState.currentUser.poemTitle);
      console.log(poemResponse);
      setCurrentPoem(poemResponse as IPoem[]);
    }
  };

  const RenderLinesString = () => {
    let finalPoem = '';

    if (currentPoem) {
      currentPoem[0].lines.forEach((line: string, index: number) =>
        index == 0 ? (finalPoem += '') : (finalPoem += line + '\n'),
      );
    }
    return (
      <div id="poem">
        <h1>{currentPoem ? currentPoem[0].title : null}</h1>
        {finalPoem}
        <p>- {currentPoem ? currentPoem[0].author : null}</p>
      </div>
    );
  };

  return (
    <div id="poemContainer">
      {RenderLinesString()}
      <button onClick={getPoem}>Get poem</button>
    </div>
  );
};

export default Poem;
