import React, { Component } from "react";
import * as data from '../../data/open.json';
import OpenItem from '../tools/OpenItem';
import './css/style_page.css';
import { Container } from 'react-bootstrap';

export default class Open extends Component {
  render() {
    // load up the open art data and map each one out to the open item component passing the photo info as the props
    return (
      <div className="page-body">
        <Container>
          <h1>Open Orders</h1>
          <br />
          {open_art.map((art) =>
            <OpenItem photo_info={art} />
          )}
        </Container>
      </div>
    );
  }
}

const open_art = data.open