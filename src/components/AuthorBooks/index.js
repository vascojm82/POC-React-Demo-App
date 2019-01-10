import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

class AuthorBooks extends Component{
  state = {
    author_Articles: []
  }

  componentWillMount(){
    this.setState({
      author_Articles: [
        {
          id: 1,
          author: "Someone",
          articles: [
             {
               name: "First Article",
               rating: 4,
             },
             {
               name: "Second Article",
               rating: 5,
             },
             {
               name: "Third Article",
               rating: 2,
             }
          ]
       },
       {
         id: 2,
         author: "Someone2",
         articles: [
            {
              name: "First Article",
              rating: 1,
            },
            {
              name: "Second Article",
              rating: 1,
            },
            {
              name: "Third Article",
              rating: 1,
            }
         ]
      },
      {
        id: 3,
        author: "Someon3",
        articles: [
           {
             name: "First Article",
             rating: 2,
           },
           {
             name: "Second Article",
             rating: 5,
           },
           {
             name: "Third Article",
             rating: 2,
           }
        ]
     }
      ]
    }, () => {
      console.log("this.state.author_Articles: ",this.state.author_Articles);
    });
  }

  generateRating(rating){
    let ratingStr = '';

    for(let i=0; i<rating; i++){
      ratingStr += '*';
    }

    return ratingStr;
  }

  generateList(author_Article){
    return(
      <React.Fragment>
      <Row className="show-grid">
        <Col xs={12} sm={2} md={6}>
            {author_Article.author}
        </Col>
        <Col xs={12} sm={2} md={6}>
            <Row>
              <Col xs={6}>
                {author_Article.articles[0].name}
              </Col>
              <Col xs={6}>
                {this.generateRating(author_Article.articles[0].rating)}
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                {author_Article.articles[1].name}
              </Col>
              <Col xs={6}>
                {this.generateRating(author_Article.articles[1].rating)}
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                {author_Article.articles[2].name}
              </Col>
              <Col xs={6}>
                {this.generateRating(author_Article.articles[2].rating)}
              </Col>
            </Row>
        </Col>
    </Row>
    </React.Fragment>
  );
  }

  render(){
    if(this.state.author_Articles)
      console.log("this.state.author_Articles: ",this.state.author_Articles);

    return(
      <React.Fragment>
        <Row style={{borderBottom: "1px solid #000", marginBottom: 10}}>
        <Col xs={12} sm={2} md={6}>
            <label>Author</label>
        </Col>
        <Col xs={12} sm={2} md={6}>
            <label>Ratings</label>
        </Col>
        </Row>
          {this.state.author_Articles.map((author_Article) => {
            return <React.Fragment key={author_Article.id}>{this.generateList(author_Article)}</React.Fragment>
          })}
        </React.Fragment>
    )
  }
}

export default AuthorBooks;
