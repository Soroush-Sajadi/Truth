import React from 'react';
import Soketio from './Components/Socketio';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Soketio />
      {/* <Router>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/newroom" component={NewRoom} />
      </Router>  */}
    </div>
  );
}

export default App;
