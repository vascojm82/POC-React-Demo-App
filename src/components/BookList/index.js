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
              { id:1, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/10/world/10congo-1/merlin_147221493_f95a1867-bb4e-4c94-95d4-761684649511-videoLarge.jpg', title: 'Lorem ipsum dolor.', 'summary':'Lorem ipsum dolor sit amet. ', 'author':'Alan Knoll', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/09/world/africa/congo-election-result.html?rref=collection%2Fsectioncollection%2Fworld&action=click&contentCollection=world&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront' },
              { id:2, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/15/world/15china-trial/merlin_149164569_4646821b-a3ab-49d6-8e91-1af20c1493db-videoLarge.jpg', title: 'China Sentences a Canadian, Robert Lloyd Schellenberg, to Death', 'summary':'The capital sentence came in a retrial ordered after Mr. Schellenberg had appealed a 15-year sentence.', 'author':'Brock Sheehan', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/14/world/asia/china-canada-schellenberg-retrial.html' },
              { id:3, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/15/world/15Saudi/15Saudi-videoLarge.jpg', title: 'Pompeo Presses Saudi Leader on War, Murder and Rights Abuses', 'summary':'President Trump has expressed support for Prince Mohammed bin Salman', 'author':'David Pekerman', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/14/world/middleeast/pompeo-saudi-arabia-mohammed-bin-salman.html' },
              { id:4, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/11/world/xxfrance-dispatch1/xxfrance-dispatch1-videoLarge-v2.jpg', title: 'As Migrants Risk Crossing the English Channel, French Fishing Boats Pay a Price', 'summary':'A surge in migrants trying to cross the channel has led to a rise in break-ins of the fishing boats in a French port', 'author':'Bryan Carmine', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/13/world/europe/france-english-channel-migrants.html' },
              { id:5, 'articleThumbnail':'https://static01.nyt.com/images/2019/01/15/world/15indonesia-crash-top/15indonesia-crash-top-videoLarge-v2.jpg', title: 'Cargo Plane Crashes in Iran, Killing at Least 15', 'summary':'Fire engulfed the 39-year-old aircraft when it hit', 'author':'Tom Kronos', 'publishedDate':'01/01/2019', 'link': 'https://www.nytimes.com/2019/01/14/world/middleeast/iran-cargo-plane-crash.html' }
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
                                 { this.renderdata(child.articleThumbnail, child.title, child.summary, child.author, child.publishedDate, child.link) }
                                </div>
                    })
                }
            </React.Fragment>
            );
        };
}

export default BookList;
