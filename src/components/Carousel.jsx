import React, { Component } from "react";
import Card from "./Card";
import react_logo from "../assets/react_logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum",
          imgsrc: react_logo,
          link: "#",
          selected: false,
        },
        {
          id: 1,
          title: "Lorem Ipsum",
          subTitle: "Lorem ipsum",
          imgsrc: react_logo,
          link: "https://s3.vaibhavshah.dev",
          selected: false,
        },
        {
          id: 2,
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum",
          imgsrc: react_logo,
          link: "https://feature.vaibhavshah.dev",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className={"justify-content-around"}>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
