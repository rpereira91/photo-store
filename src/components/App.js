import React, { Component } from 'react';
import Navbar from './header/Navbar';
import Banner from './header/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer'


class App extends Component {
  render() {
    return (
      <div>
        {/* Load the banner component with the snapwire logo */}
        <Banner />
        {/* Load the nav bar containing all the routes */}
        <Navbar />
        {/* Load the footer  */}
        <Footer />
      </div>
    );

  }
}

export default App;
