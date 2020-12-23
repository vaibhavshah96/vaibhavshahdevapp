import React, { Component } from "react";
import Card from "./Card";
import react_logo from "../assets/react_logo.svg";
import amplify_logo from "../assets/amplify2.png";
import s3_logo from "../assets/s3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Amplify Subdomain",
          subTitle: "Website from the Master Branch of the GitHub Repo.",
          imgsrc: amplify_logo,
          link: "#",
          selected: false,
        },
        {
          id: 1,
          title: "S3 Subdomain",
          subTitle: "Website from S3 Bucket",
          imgsrc: s3_logo,
          link: "https://s3.vaibhavshah.dev",
          selected: false,
        },
        {
          id: 2,
          title: "Feature Subdomain",
          subTitle: "The feature branch of the GitHub Repo",
          imgsrc: amplify_logo,
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
