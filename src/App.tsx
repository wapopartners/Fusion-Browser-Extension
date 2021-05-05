import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';

import './App.css';
import getAllStorageSyncData from './utils/getAllStorageSyncData';
import DataTable from './components/DataTable';

const App = () => {
  const [deployment, setDeployment] = useState('')
  const [outputType, setOutputType] = useState('')

  chrome.storage.sync.get('outputType', (data) => {
    setOutputType(data.outputType)
  });
  chrome.storage.sync.get('deployment', (data) => {
    setDeployment(JSON.stringify(data))
  });

  const [allData, setAllData] = useState({
    status: 'idle',
    data: null,
    error: null
  });

  useEffect(() => {
    setAllData(prevState => ({ ...prevState, status: 'pending',  }));
    getAllStorageSyncData().then((syncData: any) => {
      console.log(syncData, 'sync data')
      setAllData({ status: 'resolved', data: syncData, error: null })
    }, error => {
      setAllData(prevState => ({ status: 'rejected', error, data: prevState.data  }))
    })
    // setAllData does not need to be watched
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>
          <code>
            {allData.status === 'resolved' ? JSON.stringify(allData.data) : allData.status}
          </code>
        </pre>
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
      <DataTable data={allData}  />
    </div>
  );
};

export default App

function allData(allData: any, arg1: string) {
  throw new Error('Function not implemented.');
}
function syncData(syncData: any) {
  throw new Error('Function not implemented.');
}

