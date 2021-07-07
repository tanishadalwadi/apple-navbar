import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarFirst from './components/NavBarFirst/NavBarFirst';
import NavBarSecond from './components/NavBarSecond/NavBarSecond';
import {macs,ipads,iphone,music,tv,watches} from './AppleData/data';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBarFirst/>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/mac">
          <NavBarSecond products={macs} bg='#fff'/>
        </Route>
        <Route path="/ipad">
          <NavBarSecond products={ipads} bg='#fff'/> 
        </Route>
        <Route path="/iphone">
          <NavBarSecond products={iphone} bg='#111113'/>
        </Route>
        <Route path="/watch">
          <NavBarSecond products={watches} bg='#fff'/>
        </Route>
        <Route path="/tv">
        <NavBarSecond products={tv} bg='#111113'/>
        </Route>
        <Route path="/music">
        <NavBarSecond products={music} bg='#111113'/>
        </Route>
        <Route path="/support">
        <h1>Support</h1>
        </Route>
        <Route path="/search">
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
