import React, { useContext, useState, useEffect } from 'react';
import AppContext from 'utils/AppContext';
import './profile.css';
import Refresh from './refresh.png';

import { IPoem } from 'types';

import { fetchPoem } from '../../utils/fetchPoem';

const Poem = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [currentPoem, setCurrentPoem] = useState<IPoem[] | undefined>();
  let randNumber = 1;

  const getPoem = async () => {
    if (appState.currentUser) {
      const poemResponse = await fetchPoem(appState.currentUser.favAuthor);
      setCurrentPoem(poemResponse as IPoem[]);
    }
  };

  useEffect(() => {
    if (appState.currentUser) {
      getPoem();
    }
  }, [randNumber]);

  const RenderLinesString = () => {
    let finalPoem = '';

    if (currentPoem) {
      randNumber = Math.floor(Math.random() * currentPoem.length);
      if (currentPoem[randNumber].linecount < 30) {
        currentPoem[randNumber].lines.forEach((line: string, index: number) =>
          index == 0 ? (finalPoem += '') : (finalPoem += line + '\n'),
        );
      } else {
        getPoem();
      }
    }
    return (
      <div id="poem">
        <h1>{currentPoem ? currentPoem[randNumber].title : null}</h1>
        {finalPoem}
        <p>- {currentPoem ? currentPoem[randNumber].author : null}</p>
      </div>
    );
  };

  return (
    <div id="poemContainer">
      <img src={Refresh} onClick={getPoem}></img>
      {RenderLinesString()}
    </div>
  );
};

export default Poem;
