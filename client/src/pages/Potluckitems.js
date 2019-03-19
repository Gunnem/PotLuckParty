import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Potluckitems extends Component {
  state = {
    potluckitems: [],
    item: "",
    person: "",
    notes: ""
  };

  componentDidMount() {
    this.loadPotluckitems();
  }

  loadPotluckitems = () => {
    API.getPotluckitems()
      .then(res =>
        this.setState({ potluckitems: res.data, item: "", person: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  deletePotluckitem = id => {
    API.deletePotluckitem(id)
      .then(res => this.loadPotluckitems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.person) {
      API.savePotluckitem({
        item: this.state.item,
        person: this.state.person,
        notes: this.state.notes
      })
        .then(res => this.loadPotluckitems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What The Heck Should I Bring??</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="item (required)"
              />
              <Input
                value={this.state.person}
                onChange={this.handleInputChange}
                name="person"
                placeholder="person (required)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.person && this.state.item)}
                onClick={this.handleFormSubmit}
              >
                Bring
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Already Bringing To The Party</h1>
            </Jumbotron>
            {this.state.potluckitems.length ? (
              <List>
                {this.state.potluckitems.map(potluckitem => (
                  <ListItem key={potluckitem._id}>
                    <Link to={"/potluckitems/" + potluckitem._id}>
                      <strong>
                        {potluckitem.item} by {potluckitem.person}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePotluckitem(potluckitem._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Potluckitems;
