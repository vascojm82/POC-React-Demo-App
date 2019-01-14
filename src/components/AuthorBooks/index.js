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
          author: "Alan Knoll",
          articles: [
             {
               name: "China’s ‘Belt and Road’ Plan in Pakistan Takes a Military Turn",
               rating: 4,
             },
             {
               name: "A Chinese Tycoon Sought Power and Influence. Washington Responded.",
               rating: 5,
             },
             {
               name: "China’s Tactic to Catch a Fugitive Official: Hold His Two American Children",
               rating: 2,
             }
          ]
       },
       {
         id: 2,
         author: "Brock Sheehan",
         articles: [
            {
              name: "Canada’s Air Controllers, Purveyors of Pizza Goodwill",
              rating: 1,
            },
            {
              name: "China Sentences a Canadian, Robert Lloyd Schellenberg, to Death",
              rating: 1,
            },
            {
              name: "Large Explosion in Afghan Capital Kills Four",
              rating: 1,
            }
         ]
      },
      {
        id: 3,
        author: "David Pekerman",
        articles: [
           {
             name: "Theresa May Races to Save Her Brexit Deal From a Historic Defeat",
             rating: 2,
           },
           {
             name: "China, Brexit, Australian Open: Your Tuesday Briefing",
             rating: 5,
           },
           {
             name: "Congo President Didn’t Run for Re-election, but He’s Still in Control",
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
