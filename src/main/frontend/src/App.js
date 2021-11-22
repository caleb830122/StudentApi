import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import StudentForm from './components/students';
import NavBar from './components/navbar';

const Students = () => {

  // Similar to create a state object
  // userProfile is the state being used, and we have a method called setUserProfiles to manipulate it
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchAllStudent = () => {
    axios.get("http://localhost:8080/student/getAllStudents").then(res => {
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
      <tr key={index}>
          <td>{studentProfile.id}</td>
          <td>{studentProfile.firstName}</td>
          <td>{studentProfile.lastName}</td>
          <td>{studentProfile.major}</td>
      </tr>
    )
  });
};




class StudentsList extends React.Component {
  render() {
    return (
      <div className="student-list">
        <div>
          <h2>Student List</h2>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Major</th>
            </tr>
          </thead>
          <tbody>
            <Students />
          </tbody> 
        </Table>
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
