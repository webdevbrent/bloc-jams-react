import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="navbar-fixed">
      <div className="nav-wrapper">
        <Navbar className="navbar-fixed" brand='Bloc Jams' left>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/library">Library</NavItem>
        </Navbar>
      </div>
    </div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
