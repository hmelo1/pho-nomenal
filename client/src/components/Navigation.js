import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar inverse>

      <Navbar.Header className="navbar-header" >
        <Navbar.Brand>
          <Link to ="/" className="navbar-brand"> PHO-NOMINAL!</Link>
        </Navbar.Brand>
      </Navbar.Header >

      <Nav>
        <NavItem>
          Testing
        </NavItem>
        <NavItem>
          Testing2
        </NavItem>
      </Nav>

    </Navbar>
  )
}
