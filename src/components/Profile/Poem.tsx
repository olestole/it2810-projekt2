import React, { useContext, useState, useEffect } from 'react';
import AppContext from 'utils/AppContext';
import Refresh from './refresh.png';
import Spinner from 'components/Spinner';
import { IPoem } from 'types';

import { fetchPoem } from '../../utils/fetchPoem';

import './profile.css';

const Poem = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [currentPoem, setCurrentPoem] = useState<IPoem[] | undefined>();
  let randNumber = 1;

  const getPoem = async () => {
    if (appState.currentUser) {
      const poemResponse = await fetchPoem(appState.currentUser?.favAuthor);
      if (poemResponse != null) {
        setCurrentPoem(poemResponse as IPoem[]);
      }
    }
  };

  useEffect(() => {
    if (appState.currentUser) {
      getPoem();
    }
  }, []);

  const RenderLinesString = () => {
    if (currentPoem) {
      randNumber = Math.floor(Math.random() * currentPoem.length);
      return (
        <div id="poem">
          <h1>{currentPoem ? currentPoem[randNumber].title : null}</h1>
          {currentPoem[randNumber].lines.map((line: string, index: number) => (
            <p>{line}</p>
          ))}
          <h3>- {currentPoem ? currentPoem[randNumber].author : null}</h3>
        </div>
      );
    }
    return (
      <div id="poem">
        <h3>Loading poem...</h3>
        <Spinner />
      </div>
    );
  };

  return (
    <div id="poemContainer">
      {/* <img src={Refresh} onClick={getPoem}></img> */}
      {RenderLinesString()}
    </div>
  );
};

export default Poem;
