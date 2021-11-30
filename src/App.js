import './App.css';
import React from 'react';
import DYBNavigation from './DYBNavigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Badge } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <DYBNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
