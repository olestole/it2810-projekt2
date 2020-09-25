import React, { useContext, useState } from 'react';
import moon from 'assets/header/moon.svg';
import sun from 'assets/header/sun.svg';
import AppContext from 'utils/AppContext';
import Logo from 'assets/header/appLogo.svg';

import Modal from 'react-modal';

import './header.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { zIndex: 1000 },
};

const Heading = () => {
  const { appState, appDispatch } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(sessionStorage.getItem('name') === null);
  const [userName, setUserName] = useState('');
  const [userError, setUserError] = useState(false);

  const handleHomebuttonClick = () => {
    appDispatch({ type: 'setCurrentUser', payload: null });
  };

  const toggleDarkmode = () => {
    appDispatch({ type: 'darkmode' });
  };

  const closeModal = () => {
    if (userName !== '') {
      sessionStorage.setItem('name', userName);
      setModalOpen(false);
    }
    setUserError(true);
  };

  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <Modal style={customStyles} isOpen={modalOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={userError ? 'errorString' : 'usualString'}>Skriv inn ønsket brukernavn</p>
          <input onChange={handleChange} />
        </div>
      </Modal>
      <header className="header">
        <div className="logo">
          <img src={Logo} onClick={handleHomebuttonClick}></img>
        </div>
        <div>
          <h3 className="tinderName">
            {sessionStorage.getItem('name') !== null ? `${sessionStorage.getItem('name')} sin SVG-Tinder` : ''}
          </h3>
        </div>
        <div className="darkmode">
          <img src={appState.darkmode ? sun : moon} onClick={toggleDarkmode}></img>
        </div>
      </header>
    </div>
  );
};

export default Heading;
