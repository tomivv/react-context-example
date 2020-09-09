import React, { useContext } from 'react';
import { AlertContext } from './AlertContext';

export default function Main() {
  const changeAlert = useContext(AlertContext);

  function handleButton(e) {
    e.preventDefault();
    changeAlert({hidden: false, msg: '', title: ''});
  }
  return (
    <div>
      <h3>Main componenti</h3>
      <button onClick={handleButton}>paina nappia ):</button>
    </div>
  )
}