import React, { Component } from 'react';
// boot strap components used 
import { Col, Row } from 'react-bootstrap';
import './css/item.css';
import ImageComponent from './ImageComponent';
import { Link } from 'react-router-dom';

export default class OpenItem extends Component {

    // called whenever the user presses the accepct button 
    acceptPhoto(event){
        console.log("Adding " + this.props.photo_info.name + "'s photo");
    }
    render() {
        return (
            <div className="item-card">
                <Row>
                    <Col>
                        <div className="inner-card">
                            <p>{this.props.photo_info.name}</p>
                        </div>
                    </Col>
                    <Col>
                        <ImageComponent imgUrl={this.props.photo_info.imgUrl} user={this.props.photo_info.name}/>
                    </Col>
                    <Col>
                        <div className="inner-card">

                            <p>{this.props.photo_info.status}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="inner-card">
                            <p>${this.props.photo_info.price}</p>
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