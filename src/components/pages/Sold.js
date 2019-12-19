import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as data from '../../data/sold.json';
import SoldItem from '../tools/SoldItem';
import MediaQuery from 'react-responsive';

export default class Sold extends Component {
  render() {
    return (
      <div className="page-body">
        <Container>

          <h2>Sold Photos</h2>
          <br/>
          {/* If the user is on a mobile device the media query won't display the headings */}

          <MediaQuery query="(min-device-width: 1224px)">
            <div className="page-body">
              <Row>
                <Col>
                  <h2>Seller Name</h2>
                </Col>
                <Col>
                  <h2>Asking Price</h2>
                </Col>
                <Col>
                  <h2>Image</h2>
                </Col>
                <Col>
                  <h2>Buyer Name</h2>
                </Col>
                <Col>
                  <h2>Sale Price</h2>
                </Col>
              </Row>
            </div>
          </MediaQuery>
          {/* Map each element from the sold art file to a sold item component */}
          {sold_art.map((art) =>
            <SoldItem photo_info={art} />
          )}
        </Container>
      </div>
    );
  }
}

// read the data from the sold file
const sold_art = data.sold