import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Contents } from './components/Contents';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Contents />
    </div>
  );
}

export default App;
