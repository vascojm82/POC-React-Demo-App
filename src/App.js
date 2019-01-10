import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import BookList from './components/BookList/index';
import Book from './components/Book/index';
import AuthorBooks from './components/AuthorBooks/index';
import ChartBooks from './components/ChartBooks/index';
// import StatsChart from './components/ChartBooks/StatsChart';

class App extends Component {
  constructor(props) {
      super(props);

      let book = { id:1, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' }

      this.state = {
        Book: <Book renderType={0} onClick={this.props.onClick} articleThumbnail={book.articleThumbnail} title={book.title} summary={book.summary} author={book.author} PublishedDate={book.PublishedDate} link={book.link} />
      }
  }

  onClick(properties){
    console.log("onCLick ---App---: ",properties);
    let newBook = <Book renderType={0} articleThumbnail={properties.articleThumbnail} title={properties.title} summary={properties.summary} author={properties.author} PublishedDate={properties.PublishedDate} link={properties.link} />
    this.setState({
      Book: newBook
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <p>LSEG-Dashboard</p>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
              </Navbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6} lg={6} style={{border:"1px solid #000", height:"50vh", overflow: "scroll"}} >
              <BookList onClick={this.onClick.bind(this)} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} style={{border:"1px solid #000", height:"50vh"}}>
              {this.state.Book}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6} lg={6} style={{border:"1px solid #000", height:"50vh", overflow: "scroll"}}>
              <AuthorBooks />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} style={{border:"1px solid #000", height:"50vh"}}>
              <ChartBooks />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
