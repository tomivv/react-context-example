import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AlertProvider } from './components/AlertContext';
import useAlert from './components/useAlert';
import Alert from './components/Alert';
import Main from './components/Main';

function App() {

  const { alert, changeAlert } = useAlert();

  return (
    <AlertProvider value={changeAlert}>
      <div className="App">
        <Alert alert={alert} />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
