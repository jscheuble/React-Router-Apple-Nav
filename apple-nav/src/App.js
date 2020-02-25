import React from 'react';
import './App.css';
import data from './data';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';


function App() {
  data.map(elem => console.log(elem.name))
  return (
    <div className="App">
      <Route>
        <NavWrapper />
      </Route>
      <Route>
        <SubNav />
      </Route>
    </div>
  );
}

export default App;
