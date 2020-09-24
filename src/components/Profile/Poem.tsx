import React, { useContext, useState, useEffect } from 'react';
import AppContext from 'utils/AppContext';
import Spinner from 'components/Spinner';
import { IPoem } from 'types';
import { AiOutlineReload } from 'react-icons/ai';

import { fetchPoem } from '../../utils/fetchPoem';

import './profile.css';

const Poem = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [currentPoemList, setCurrentPoemList] = useState<IPoem[] | undefined>();
  const [currentPoem, setCurrentPoem] = useState<IPoem | undefined>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    getPoem();
  }, []);

  const getPoem = async () => {
    if (appState.currentUser) {
      const poemResponse = await fetchPoem(appState.currentUser?.favAuthor);
      if (poemResponse != null) {
        setCurrentPoemList(poemResponse as IPoem[]);
        getNextPoem(poemResponse as IPoem[]);
      }
    }
  };

  const getNextPoem = (poemlist?: IPoem[]) => {
    // Needs to do this optional direct passing of poemlist as useState isn't synchronous --> Doesn't get a poem on first load
    const poemList = currentPoemList ? currentPoemList : poemlist ? poemlist : null;
    if (poemList) {
      setCurrentPoem(poemList[currentIndex]);
      setCurrentIndex((currentIndex + 1) % poemList.length);
    }
  };

  const truncatePoemLines = (poem: IPoem, length: number = 30): string[] => {
    if (poem.linecount > 30) {
      return [...poem.lines.slice(0, length), '...'];
    }
    return poem.lines;
  };

  const RenderLinesString = () => {
    if (currentPoemList) {
      return (
        <div id="poem">
          <h1>{currentPoem?.title}</h1>
          {truncatePoemLines(currentPoem!).map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
          <h3>- {currentPoem?.author}</h3>
        </div>
      );
    }
  };

  return (
    <div className="mainContainer">
      {currentPoem ? (
        <div className="reloadContainer">
          <AiOutlineReload id="reloadButton" onClick={() => getNextPoem()} />
        </div>
      ) : null}
      <div id="poemContainer">{currentPoem ? RenderLinesString() : <div id="spinner">{Spinner()}</div>}</div>
    </div>
  );
};

export default Poem;
