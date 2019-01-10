import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Book extends Component {
  onClick(properties){
    console.log("onCLick ---Book---");
    this.props.onClick(properties);
  }

    render() {
      const {renderType} = this.props;
      console.log("Book this.props: ",renderType);
        return (
          renderType === 1 ?(
          <Row className="show-grid" style={{cursor: "pointer"}} onClick={this.onClick.bind(this, this.props)}>
              <Col xs={12} sm={2} md={2}>
                  <img src={ this.props.articleThumbnail } style={{width: "100%", height: "100%"}} alt="something"/>
              </Col>
              <Col xs={12} sm={2} md={2}>
                  <label> { this.props.title } </label>
              </Col>
              <Col xs={12} sm={2} md={2}>
                  <label> { this.props.summary } </label>
              </Col>
              <Col xs={12} sm={2} md={2}>
                  <label> { this.props.author } </label>
              </Col>
              <Col xs={12} sm={2} md={2}>
              <label> { this.props.PublishedDate } </label>
              </Col>
              <Col xs={12} sm={2} md={2}>
              <a href={ this.props.link }>see more...</a>
              </Col>
          </Row>
        ): (
          <Row className="show-grid">
              <Col xs={12} sm={6} md={6}>
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <label> { "Title: " + this.props.title } </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <label> { "Summary: " + this.props.summary } </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <label> { "Author: " + this.props.author } </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <label> { "Published Date: " + this.props.PublishedDate } </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12}>
                      <a href={ this.props.link }>see more...</a>
                    </Col>
                  </Row>
              </Col>
              <Col xs={12} sm={6} md={6}>
                  <img src={ this.props.articleThumbnail } style={{width: 200, height: 200}} alt="something"/>
              </Col>
          </Row>
        )
      );
    }
}

export default Book;
