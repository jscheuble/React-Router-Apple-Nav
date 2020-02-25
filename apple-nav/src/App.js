import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <NavWrapper />
      </Route>
      <Route path='/'>
        <SubNav />
      </Route>
    </div>
  );
}

export default App;
