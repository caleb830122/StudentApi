import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { 
  Link
} from "react-router-dom";
class NavBar extends React.Component {

  render() {

    if (localStorage.getItem("user") == null) {
      return (
     
        <div>
        <Navbar bg="myPurple" expand="lg" variant="dark" fixed="true">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Student Information System Portal (SISP)
            </Navbar.Brand>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            
          </Container>
        </Navbar>
        </div>
    );

    } else {
    return (
      <div>
        <Navbar bg="myPurple" expand="lg" variant="dark" fixed="true">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Student Information System Portal (SISP)
            </Navbar.Brand>
            <Nav.Link as={Link} to={"/logout"}>Logout</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                <Nav.Link as={Link} to={"/newStudent"}>Add new student</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Report
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
    }
  }
}

export default NavBar;
