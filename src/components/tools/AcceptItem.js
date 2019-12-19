import React, { Component } from 'react';
import { Col, Row, Alert, Button } from 'react-bootstrap';
import ImageComponent from './ImageComponent';

import { Link } from 'react-router-dom'
import './css/item.css';


export default class OpenItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            soldName: '',
            soldPrice: '',
            alert: false
        }
    }
    cancelSale(event) {
        this.setState({ name: this.state.soldName })
        this.setState({ price: this.state.soldPrice })
        this.setState({ alert: !this.state.alert })
    }
    onInputSubmit(event) {
        if (this.state.name && this.state.price) {

            // make the alert variable the opposite of what it was
            this.setState({ alert: !this.state.alert })
            // sold name and sold price need to be set for the alert to display something, 
            this.setState({ soldName: this.state.name })
            this.setState({ soldPrice: this.state.price })
            // clear the input boxes
            this.setState({ name: '' })
            this.setState({ price: '' })
        }
    }
    confirmSale(event) {
            // console log the price and name, 
            console.log(this.state.soldPrice)
            console.log(this.state.soldName)
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
                        <ImageComponent imgUrl={this.props.photo_info.imgUrl} />
                    </Col>
                    <Col>
                    <div className="inner-card">

                        <h3>
                            ${this.props.photo_info.price}
                        </h3>
                    </div>
                    </Col>
                    <Col>
                        <div className='inner-card'>

                            {/* the value of the input is set to the name state, and every time the input changes the name state is updated to the inputed value */}
                            <input
                                type="text"
                                placeholder="Sell to"
                                className="name"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='inner-card'>

                            {this.state.price ? '$' : ' '}
                            {/* same logic as the name, except this input is set to a number */}
                            <input
                                type="number"
                                placeholder="$"
                                className="price"
                                value={this.state.price}
                                onChange={(e) => this.setState({ price: e.target.value })}
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className="inner-card">

                        {/* Submit the values to be checked  */}
                        <Button variant="secondary" onClick={() => { this.onInputSubmit() }}>Accept</Button>
                    </div>
                    </Col>
                </Row>
                <Alert variant="success" show={this.state.alert}>
                    <Alert.Heading>
                        Sell {this.props.photo_info.name}'s photo to {this.state.soldName} for ${this.state.soldPrice}?
                    </Alert.Heading>
                    {/* Dismiss and take the user to the sold page */}

                    <Link to="/Sold" className="btn" onClick={() => {this.confirmSale()}}>Accept</Link>
                    <Button variant="secondary" onClick={() => { this.cancelSale() }}>Cancel</Button>


                </Alert>
            </div>
        )
    }
    onInputChange(term) {
        this.setState({ term });
    }
}

