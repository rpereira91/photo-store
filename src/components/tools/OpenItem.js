import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/item.css';
import ImageComponent from './ImageComponent';
import { Link } from 'react-router-dom';

export default class OpenItem extends Component {


    acceptPhoto(event){
        console.log("Adding " + this.props.photo_info.name + "'s photo");
    }
    render() {
        return (
            <div className="item-card">
                <Row>
                    <Col className="name">
                        <div className="inner-card">

                            <h3>{this.props.photo_info.name}</h3>
                        </div>
                    </Col>
                    <Col>
                        {/* <Figure>
                            <Figure.Image src={this.props.photo_info.imgUrl} width={171} height={180} />

                        </Figure> */}
                        <ImageComponent imgUrl={this.props.photo_info.imgUrl} />
                    </Col>
                    <Col>
                        <div className="inner-card">

                            <h3>{this.props.photo_info.status}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="inner-card">
                            <h3>${this.props.photo_info.price}</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="inner-card">
                            <Link to="/Accepted" className="btn btn-secondary" onClick={() => { this.acceptPhoto() }}>Create Order</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}