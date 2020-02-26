import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavWrapper />
      </Route>
      <Route exact path='/sub/:id'>
        <SubNav />
      </Route>
    </div>
  );
}

export default App;
