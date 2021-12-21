import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/navbar';
import Login from './components/login';
import Logout from './components/logout';
import StudentList from "./components/studentList";
import StudentForm from "./components/studentForm";
import HomePanel from "./components/homePanel";

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />    
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
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
