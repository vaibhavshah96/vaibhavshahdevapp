import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import Content from "../components/Content";
import Hero from "../components/Hero";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Enter your e-mail</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                // value={this.state.email}
                // onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
