import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects'>
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
