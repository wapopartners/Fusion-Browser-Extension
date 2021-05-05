import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

import './App.css';

const App = () => {
  const [deployment, setDeployment] = useState('')
  const [outputType, setOutputType] = useState('')

  chrome.storage.sync.get('outputType', (data) => {
    setOutputType(data.outputType)
  });
  chrome.storage.sync.get('deployment', (data) => {
    setDeployment(JSON.stringify(data))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          outputType: {outputType}
        </p>
        <p>
          deployment: {deployment}
        </p>
      </header>
    </div>
  );
};

export default App