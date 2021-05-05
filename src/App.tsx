import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Fusion from './components/Fusion';
import Themes from './components/Themes';
import Docs from './components/Docs';
import Alerts from './components/Alerts';
import logo from './logo.svg';

import './App.css';
import getAllStorageSyncData from './utils/getAllStorageSyncData';
import DataTable from './components/DataTable';

const App = () => {
  const [deployment, setDeployment] = useState('')
  const [outputType, setOutputType] = useState('')
  const [blockDistTag, setBlockDistTag] = useState('')
  const [activeTab, setActiveTab] = useState('fusion')

  useEffect(() => {
    chrome.storage.sync.get('outputType', (data) => {
      setOutputType(data.outputType)
    });
    chrome.storage.sync.get('blockDistTag', (data) => {
      setBlockDistTag(data.blockDistTag)
    });
    chrome.storage.sync.get('deployment', (data) => {
      setDeployment(JSON.stringify(data))
    });
  }, [])

  const renderSection = () => {
    switch (activeTab) {
      case 'fusion':
        return <Fusion data={{ outputType, deployment }} />;
      case 'themes':
        return <Themes data={{blockDistTag}} />
      case 'docs':
        return <Docs />
      case 'alerts':
        return <Alerts />
      default:
        return <Fusion data={{ outputType, deployment }} />
    }
  }

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

        <Nav variant="pills" defaultActiveKey="fusion">
          <Nav.Item>
            <Nav.Link eventKey="fusion" onClick={() => setActiveTab('fusion')}
            >Fusion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="themes" onClick={() => setActiveTab('themes')}>Themes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="docs" onClick={() => setActiveTab('docs')}>Docs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="alerts" onClick={() => setActiveTab('alerts')}>
              Alerts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          {renderSection()}
        </div>
      </header>
      <DataTable data={allData.data} status={allData.status} />
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

