import React, {useState, useEffect} from 'react';
import './App.css';
import StudentForm from './components/studentForm';
import StudentList from './components/studentList';
import NavBar from './components/navbar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <StudentList />
      <StudentForm /> */}
    </div>
  );
}

export default App;
