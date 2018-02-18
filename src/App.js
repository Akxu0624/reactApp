import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Bookstore from './components/Bookstore.js';
import BookDetails from './components/BookDetails.js';
import Search from './components/Search.js';

import './App.css';
import 'antd-mobile/dist/antd-mobile.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <Route exact path="/" component={Bookstore}/>
            <Route exact path="/details/:id" component={BookDetails}/>
            <Route exact path="/search" component={Search}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
