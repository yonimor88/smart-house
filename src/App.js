import React, {useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Room from "./components/Room";
import AddRoom from "./components/AddRoom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";


function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path = '/' component = {()=>{return <Homepage/>}}/>
          <Route exact path = '/room' component = {()=>{return <Room/>}}/>
          <Route exact path = '/addroom' component = {()=>{return <AddRoom/>}}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
