import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./css/nav_style.css";
import Open from '../pages/Open';
import Accepted from '../pages/Accepted';
import Sold from '../pages/Sold';
class Navbar extends Component {
  render() {
    return (


      <HashRouter>
          <div className="header">
            <ul>
              <li><NavLink exact to="/">Open</NavLink ></li>
              <li><NavLink to="/accepted">Accepted</NavLink ></li>
              <li><NavLink to="/sold">Sold</NavLink></li>
            </ul>
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
