import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
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
        <Nav variant="pills" defaultActiveKey="fusion">
          <Nav.Item>
            <Nav.Link eventKey="fusion">Fusion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="themes">Themes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="alerts">
              Alerts
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </div>
  );
};

export default App