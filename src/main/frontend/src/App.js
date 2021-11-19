// Effect hook 
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

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
      // <div className="card" key = {index}>
      //   <div className="card__body">
      //     <h2>{studentProfile.id}</h2>
      //     <p>{studentProfile.firstName}</p>
      //     <p>{studentProfile.lastName}</p>
      //   </div>
      //   <button className="card__button">Delete</button>
      //   {/* <h1>{studentProfile.id}</h1>
      //   <p>{studentProfile.firstName}</p>
      //   <p>{studentProfile.lastName}</p> */}
      // </div>
      <Card cardIndex = {index}
        id = {studentProfile.id}
        firstName = {studentProfile.firstName}
        lastName = {studentProfile.lastName}
      />
    )
  });
};

function Card(props) {
  return (
    <div className="card" key = {props.cardIndex}>
      <div className="card__body">
        <h2 className="card__id">{props.id}</h2>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
      <button className="card__button">Delete</button>
      {/* <h1>{studentProfile.id}</h1>
      <p>{studentProfile.firstName}</p>
      <p>{studentProfile.lastName}</p> */}
      
  </div>)
}


function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
      {/* <Students /> */}
    </div>
  );
}

export default App;
