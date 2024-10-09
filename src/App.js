import React from 'react';
import LeftPanel from './components/LeftPanel';
import MainViewer from './components/MainViewer';
import HubView from './components/HubView';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <LeftPanel />
      <div className="main-content">
        <HubView />
        <MainViewer />
      </div>
    </div>
  );
}

export default App;
