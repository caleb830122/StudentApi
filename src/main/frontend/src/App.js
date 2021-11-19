import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Navbar, Container, Nav, NavDropdown, Button, Table, Form} from 'react-bootstrap';
const Students = () => {

  // Similar to create a state object
  // userProfile is the state being used, and we have a method called setUserProfiles to manipulate it
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchAllStudent = () => {
    axios.get("http://localhost:8080/student/getAllStudent").then(res => {
      console.log(res);
      // set userProfile state object with response data
      setStudentProfiles(res.data)
    });
  };

  useEffect(() => {
    fetchAllStudent();
  }, []);

  return studentProfiles.map((studentProfile, index) => {
    
    return (
      // <div key = {index}>
      //   <div>
      //     <h2>{studentProfile.id}</h2>
      //     <p>{studentProfile.firstName}</p>
      //     <p>{studentProfile.lastName}</p>
      //   </div>
      //   <button>Delete</button>
      //   {/* <h1>{studentProfile.id}</h1>
      //   <p>{studentProfile.firstName}</p>
      //   <p>{studentProfile.lastName}</p> */}
      // </div>
      // <div>
      //   <Table striped bordered hover>
      //     <thead>
      //       <tr>
      //         <th>id</th>
      //         <th>First Name</th>
      //         <th>Last Name</th>
      //         <th>Major</th>
      //       </tr>
      //     </thead>
          <tbody>
            <tr key={index}>
                <td>{studentProfile.id}</td>
                <td>{studentProfile.firstName}</td>
                <td>{studentProfile.lastName}</td>
                <td>{studentProfile.major}</td>
            </tr>
          </tbody>
      //   </Table>
      // </div>
    )
  });
};


class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="myPurple" expand="lg" variant="dark" fixed="true">
      <Container>
        <Navbar.Brand href="#home">Student Information System Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Search</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
  }
}

class StudentsList extends React.Component {
  render() {
    return (
      <div className="StudentsList">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Major</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr key={index}>
                <td>{studentProfile.id}</td>
                <td>{studentProfile.firstName}</td>
                <td>{studentProfile.lastName}</td>
                <td>{studentProfile.major}</td>
            </tr>
          </tbody> */}
          <Students />
        </Table>
      </div>
    );
  }
}

class StudentForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

}




const App = () => {
  return (
    <div className="App">
      <NavBar />
      <StudentsList />
      <StudentForm />
    </div>
  );
}

export default App;
