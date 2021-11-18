// Effect hook 
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
      <div key = {index}>
        <h1>{studentProfile.id}</h1>
        <p>{studentProfile.firstName}</p>
        <p>{studentProfile.lastName}</p>
      </div>
    )
  });
};


function App() {
  return (
    <div className="App">
      <Students />
    </div>
  );
}

export default App;
