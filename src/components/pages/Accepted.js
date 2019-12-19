import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import * as data from '../../data/accepted.json';
import AcceptedItem from '../tools/AcceptItem';

export default class Accepted extends Component {
  render() {
    // const alert = useAlert();
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
