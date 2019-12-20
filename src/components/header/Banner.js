import React, { Component } from 'react';
// import { Container, Row } from 'react-bootstrap';
import './css/banner.css'
class Banner extends Component {
  render() {
    return (
      // div with the logo in it
      <div className="banner">
          <img src="images/sw-brandstack_dark_265x265.png" className="banner-img" alt="logo"/>
      </div>
    );

  }
}

export default Banner;
