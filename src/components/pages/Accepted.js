import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as data from '../../data/accepted.json';
import AcceptedItem from '../tools/AcceptItem';
import MediaQuery from 'react-responsive';


export default class Accepted extends Component {
  render() {
    // load up the accepted art data and map each one to a new accepted item component passing it the photo info as one of the props
    return (
        <Container>
          <h2>Accepted Photos</h2>
          <br />
          <MediaQuery query="(min-device-width: 1024px)">
            <div className="page-body">
              <Row>
                <Col>
                  <h2>Name</h2>
                </Col>
                <Col>
                  <h2>Image</h2>
                </Col>
                <Col>
                  <h2>Asking Price</h2>
                </Col>
                <Col>
                  <h2>Buyer Name</h2>
                </Col>
                <Col>
                  <h2>Sale Price</h2>
                </Col>
                <Col>
                  <h2>Control</h2>
                </Col>
              </Row>
            </div>
          </MediaQuery>
          {act_art.map((art) =>
            <AcceptedItem photo_info={art} />
          )}
        </Container>
    );
  }
}


const act_art = data.accepted
