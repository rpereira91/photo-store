import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as data from '../../data/sold.json';
import SoldItem from '../tools/SoldItem';
import MediaQuery from 'react-responsive';

export default class Sold extends Component {
  render() {
    return (
      // load up the sold art data and map each one out to the sold item component passing the photo info as the props

        <Container>
          <h2>Sold Photos</h2>
          <br />
          {/* The media query won't display the headings on smaller devices*/}

          <MediaQuery query="(min-device-width: 1024px)">
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
    );
  }
}

// read the data from the sold file
const sold_art = data.sold