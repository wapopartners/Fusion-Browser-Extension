import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import {
  Alerts,
  Docs,
  Fusion,
  Themes
} from './components';
import { filterObjectByKeys, getAllStorageSyncData } from './utils'
import logo from './logo.svg';
import {
  CONTENT_CACHE_KEYS,
  ENVIRONMENT_KEYS,
  SITE_PROPERTY_KEYS,
  TREE_KEYS
} from './Constants'
import './App.css';

const renderSection = (activeTab: string, allKeyValueData: any, status: string) => {
  switch (activeTab) {
    case 'themes':
      return <Themes data={filterObjectByKeys(allKeyValueData, [...ENVIRONMENT_KEYS, ...SITE_PROPERTY_KEYS])} status={status} />
    case 'docs':
      return <Docs />
    case 'alerts':
      return <Alerts />
    case 'fusion':
    default:
      return <Fusion data={filterObjectByKeys(allKeyValueData, ['arcSite', 'spaEnabled', 'outputType', 'deployment', ...TREE_KEYS, ...CONTENT_CACHE_KEYS])} status={status} />;
  }
}

const App = () => {
  const [activeTab, setActiveTab] = useState('fusion')
  const [URL, setURL] = useState('')
  const [fallback, setFallback] = useState(false)
  const [allData, setAllData] = useState({
    status: 'idle',
    data: null,
    error: null
  });

  const { status, data: allKeyValueData } = allData;

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    setURL(url);
    setFallback(true)
  });

  useEffect(() => {
    setAllData(prevState => ({ ...prevState, status: 'pending', }));
    getAllStorageSyncData().then((syncData: any) => {
      console.log(syncData, 'sync data')
      setAllData({ status: 'resolved', data: syncData, error: null })
    }, error => {
      setAllData(prevState => ({ status: 'rejected', error, data: prevState.data }))
    })
    // setAllData does not need to be watched
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {fallback && <p>Refresh the page to recrawl</p>}
        <p>Crawled URL: {URL}</p>
        {
          allData.status === 'pending' || allData.status === 'idle' ? <h3>Loading...</h3>
            : !allData.data || !allData.data.arcSite ?
              <h3>Not a Fusion page</h3>
              : <>
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
                      Alerts <Badge variant="danger">2</Badge>
                      <span className="sr-only">unchecked alerts</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div>
                  {renderSection(activeTab, allKeyValueData, status)}
                </div>
              </>
        }

      </header>
    </div>
  );
};

export default App

