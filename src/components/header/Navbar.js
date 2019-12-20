import React, { Component } from 'react';
// routing packages 
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./css/nav_style.css";
// three different routes
import Open from '../pages/Open';
import Accepted from '../pages/Accepted';
import Sold from '../pages/Sold';
class Navbar extends Component {
  render() {
    return (
      // load up the hash router
      <HashRouter>
        {/* a un ordered list that contains all the nav links */}
          <div className="header">
            <ul>
              <li><NavLink exact to="/">Open</NavLink ></li>
              <li><NavLink to="/accepted">Accepted</NavLink ></li>
              <li><NavLink to="/sold">Sold</NavLink></li>
            </ul>
            {/* the content of the pages that gets loaded up based on the paths */}
          <div className="content" >
            <Route exact path="/" component={Open} />
            <Route path="/Accepted" component={Accepted} />
            <Route path="/Sold" component={Sold} />
          </div>
        </div>
      </HashRouter>
    );

  }
}

export default Navbar;
