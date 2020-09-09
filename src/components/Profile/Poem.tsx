import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';

const Poem = () => {
  const { appState, appDispatch } = useContext(AppContext);

  // Example of how we could use Dispatch to change a Users name. 'targetUser' would probably be removed
  // And always have targetUser as 'CurrentUser'
  const handleClick = (e: any) => {
    appDispatch({ type: 'setName', targetUser: 'Sverre', payload: 'Henrik' });
  };

  return (
    <div>
      <h1>Halla bro</h1>
      <p>{appState.users[0].name}</p>
      <button onClick={handleClick}>Klikk</button>
    </div>
  );
};

export default Poem;
