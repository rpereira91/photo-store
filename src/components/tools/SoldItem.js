import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ImageComponent from './ImageComponent';

import './css/item.css';

export default class OpenItem extends Component {
    render() {
        // Just displays the info
        return (
            <div className="item-card">
                <Row>
                    <Col className="name">
                        <h3>{this.props.photo_info.name}</h3>
                    </Col>
                    <Col>
                        <h3>
                            ${this.props.photo_info.price}
                        </h3>
                    </Col>
                    <Col>
                        <ImageComponent imgUrl={this.props.photo_info.imgUrl} />

                    </Col>
                    <Col className="name">
                        <h3>{this.props.photo_info.transaction.buyerName}</h3>
                    </Col>
                    <Col>
                        <h3>${this.props.photo_info.transaction.salePrice}</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}