import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    potluckitem: {}
  };
  // When this component mounts, grab the potluck with the _id of this.props.match.params.id
  // e.g. localhost:3000/potluckitems/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPotluckitem(this.props.match.params.id)
      .then(res => this.setState({ potluckitem: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.potluckitem.item} by {this.state.potluckitem.person}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Notes</h1>
              <p>
                {this.state.potluckitem.notes}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to what to bring</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
