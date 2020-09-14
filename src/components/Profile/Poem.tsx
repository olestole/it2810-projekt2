import React, { useContext, useState } from 'react';
import AppContext from 'utils/AppContext';

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

  const RenderLines = () => {
    return <p>{currentPoem ? currentPoem[0].lines[2] : null}</p>;
  };

  return (
    <div>
      <h1>{currentPoem ? currentPoem[0].title : null}</h1>
      <RenderLines />
      <p>- {currentPoem ? currentPoem[0].author : null}</p>
      <button onClick={getPoem}>Get poem</button>
    </div>
  );
};

export default Poem;
