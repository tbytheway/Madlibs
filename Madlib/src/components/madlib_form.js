import React, { Component } from 'react';
import {
    Col,
    Row
} from 'reactstrap';

class Madlibform extends Component {
    
    handleChange = function() {
        console.log('trying to handle change')
    }
    
    render() {
        return (
            <Row style={{textAlign: 'center', color: 'white'}}>
                <Col md='3' className="inputWrapper">
                    <Row>
                        <Col md='2'>
                            <label className="greenlabel">1</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Color' type='text' onChange = {this.handleChange} />
                        </Col>
                    </Row>
                </Col>
                <Col md='3'>
                    <Row>
                        <Col md='2'>
                            <label className="greenlabel">2</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Color' type='text' onChange = {this.handleChange} />
                        </Col>
                    </Row>
                </Col>
                <Col md='3'>
                    <Row>
                        <Col md='2'>
                            <label className="greenlabel">3</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Color' type='text' onChange = {this.handleChange} />
                        </Col>
                    </Row>
                </Col>
                <Col md='3'>
                    <Row>
                        <Col md='2'>
                            <label className="greenlabel">4</label>
                        </Col>
                        <Col md='10'>
                            <input placeholder='Color' type='text' onChange = {this.handleChange} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default Madlibform