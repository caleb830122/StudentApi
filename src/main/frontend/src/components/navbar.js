import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar bg="myPurple" expand="lg" variant="dark" fixed="true">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Student Information System Portal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                <Nav.Link as={Link} to={"/link"}>Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/home" elements={<h1>Student</h1>} />
            <Route path="/search" element={<h1>Search</h1>} />
            
          </Routes>
        </div>
      </Router>
    );
  }
}

export default NavBar;
