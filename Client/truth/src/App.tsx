import React from 'react';
import SignIn from './Components/SignIn';
import NewRoom from './Components/NewRoom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/newroom" component={NewRoom} />
      </Router> 
    </div>
  );
}

export default App;
