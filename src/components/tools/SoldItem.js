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
                        <div className="inner-card">
                            <p>{this.props.photo_info.name}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="inner-card">
                            <p>
                                ${this.props.photo_info.price}
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <ImageComponent imgUrl={this.props.photo_info.imgUrl} user={this.props.photo_info.name} />

                    </Col>
                    <Col className="name">
                        <div className="inner-card">
                            <p>{this.props.photo_info.transaction.buyerName}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="inner-card">
                            <p>${this.props.photo_info.transaction.salePrice}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}