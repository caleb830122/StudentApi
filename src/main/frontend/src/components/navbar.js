import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from "./login"
import HomePanel from "./homePanel";
import StudentList from "./studentList";
import StudentForm from "./studentForm"
class NavBar extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <Navbar bg="myPurple" expand="lg" variant="dark" fixed="true">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Student Information System Portal (SISP)
            </Navbar.Brand>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
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
        <div>
          <Routes>
            <Route path="/" element={<HomePanel />} />
            <Route path="/search" element={<StudentList />} />
            <Route path="/newStudent" element={
              <div>
                <h3 className="add-student-heading">Please type in the information of the new student you want to add</h3>
                <StudentForm />
              </div>
              } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default NavBar;
