import React, { Component } from "react";
import * as data from '../../data/open.json';
import OpenItem from '../tools/OpenItem';
import './css/style_page.css';
import { Container, Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';


export default class Open extends Component {
  render() {
    // load up the open art data and map each one out to the open item component passing the photo info as the props
    return (
        <Container>
          <h2>Open Orders</h2>
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
                  <h2>Status</h2>
                </Col>
                <Col>
                  <h2>Price</h2>
                </Col>
                <Col>
                  <h2>Control</h2>
                </Col>
              </Row>
            </div>
          </MediaQuery>
          {open_art.map((art) =>
            <OpenItem photo_info={art} />
          )}
        </Container>
    );
  }
}

const open_art = data.open