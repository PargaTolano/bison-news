import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar } from '_comps';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* Agregar aqui las rutas */}
      </Router>
    </div>
  );
}

export default App;
