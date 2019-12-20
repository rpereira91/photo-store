import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import * as data from '../../data/accepted.json';
import AcceptedItem from '../tools/AcceptItem';

export default class Accepted extends Component {
  render() {
    // load up the accepted art data and map each one to a new accepted item component passing it the photo info as one of the props
    return (
      <div className="page-body">
        <Container>
          <h2>Accepted Photos</h2>
          <br />
          {act_art.map((art) =>
            <AcceptedItem photo_info={art} />
          )}
        </Container>

      </div>
    );
  }
}


const act_art = data.accepted
