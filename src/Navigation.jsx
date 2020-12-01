import React from "react";
import {
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  Navbar,
  NavbarText,
} from "reactstrap";

function Navigation() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">vaibhavshah.dev</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Aboutme">About Me</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;