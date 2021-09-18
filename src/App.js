import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import BuatTodo from './pages/PageTodo'


import index from'./pages/index';
import './App.css'


function App() {
  return (
    <Router>
      <Navbar/>
      
          <Switch>
            <Route exact path="/" component={index} />
            <Route path="/Home" component={index} />
            <Route path="/buattodo" component={BuatTodo} />
           
          </Switch>
        
    </Router>
  );
}

export default App;
