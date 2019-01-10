import React, {Component} from 'react';
import Book from '../Book/index';
import { Row, Col } from 'react-bootstrap';

class BookList extends Component {

    state = {
        Books: []
    }

    componentDidMount() {
        this.setState({ Books :
            [
                { id:1, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
                { id:2, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone2', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
                { id:3, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone3', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
                { id:4, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone4', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
                { id:5, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Someone5', 'PublishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' }
            ]
        });
    }

    generateBook(){
      return this.state.Books[0];
    }

    renderdata(articleThumbnail, title, summary, author, PublishedDate, link) {
        return(
            <React.Fragment>
            <Book renderType={1} onClick={this.props.onClick} articleThumbnail={articleThumbnail} title={title} summary={summary} author={author} PublishedDate={PublishedDate} link={link} />
            <hr />
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
            <Row className="show-grid" style={{borderBottom: "1px solid #000", marginBottom: 10}}>
                <Col xs={12} sm={2} md={2}>
                    <label> Thumbnail </label>
                </Col>
                <Col xs={12} sm={2} md={2}>
                    <label> Title </label>
                </Col>
                <Col xs={12} sm={2} md={2}>
                    <label> Summary </label>
                </Col>
                <Col xs={12} sm={2} md={2}>
                    <label> Author </label>
                </Col>
                <Col xs={12} sm={2} md={2}>
                <label> Published Date </label>
                </Col>
                <Col xs={12} sm={2} md={2}>
                &nbsp;
                </Col>
            </Row>
                {
                    this.state.Books.map((child) => {
                        return <div key={child.id}>
                                 { this.renderdata(child.articleThumbnail, child.title, child.summary, child.author, child.PublishedDate, child.link) }
                                </div>
                    })
                }
            </React.Fragment>
            );
        };
}

export default BookList;
