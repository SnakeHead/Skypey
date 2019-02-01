import React from 'react';
import './App.css';
import store from '../store';
import _ from 'lodash';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;