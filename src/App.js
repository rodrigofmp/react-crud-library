import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Create from './components/create.component';
import Edit from './components/edit.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h2>LIBRARY</h2>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">List</Link>
                </li>              
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">New</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>        
          <Switch>
              <Route exact path='/' component={ Index } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
