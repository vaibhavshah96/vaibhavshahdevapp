import React from "react";
import { Nav, NavItem, NavbarBrand, NavLink, Navbar } from "reactstrap";

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
            <NavLink href="/aboutme">About Me</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
