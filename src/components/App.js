import React, { Component } from 'react';
import Navbar from './header/Navbar';
import Banner from './header/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer'


class App extends Component {
  render() {
    return (
      <div>

        <Banner />
        <Navbar />
        <Footer />
      </div>
    );

  }
}

export default App;
