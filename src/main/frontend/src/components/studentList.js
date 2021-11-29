import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Input } from 'semantic-ui-react'
import Popup from './popup'
import StudentForm from './studentForm';

// Student List  
const StudentList = ({studentProfiles}) => {
    return (
        <div className="student-list">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Major</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <Students studentProfiles={studentProfiles}/>
            </tbody> 
            </Table>
        </div>
    );
}

// Each row of the student profile
const Students = ({studentProfiles}) => {  
    return studentProfiles.map((studentProfile, index) => {
      
      return (
        <tr key={index}>
            <td>{studentProfile.id}</td>
            <td>{studentProfile.firstName} {studentProfile.lastName}</td>
            <td>{studentProfile.major}</td>
            <td><EditButton idFromParent={studentProfile.id} firstNameFromParent={studentProfile.firstName} 
                            lastNameFromParent={studentProfile.lastName} majorFromParent={studentProfile.major}/></td>
        </tr>
      )
    });
  };
  
const EditButton = ( { idFromParent , firstNameFromParent, lastNameFromParent, majorFromParent} ) => { 
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Button className="delete-btn" variant="danger" size="sm" onClick={() => handleDelete(idFromParent)}>Delete</Button>
            <Button className="update-btn" variant="success" size="sm" onClick={() =>setButtonPopup(true)}>Update</Button>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} firstName={firstNameFromParent} lastName={lastNameFromParent} major={majorFromParent}>
                <StudentForm />
            </Popup>
        </div>
        
    );  
}

const handleDelete = async (id) => {
    alert('Are you sure you want to delete this student?');
    console.log(id);
    try { 
        const res = await axios.delete(`http://localhost:8080/student/deleteStudent/${id}`);
        console.log(res.data);

        //Temporary solution by refreshing the page
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}

// Root component for this student search and display page
const StudentInfoSection = () => {
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
    
    // useState hook for searching
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="student-search-page">
            <div>
                <h2>Student List</h2>
            </div>
            <div className="studentList-search-box">
                <Input icon="search" placeholder="Search student name..." onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <StudentList studentProfiles={studentProfiles.filter((value) => {
                if (searchTerm === "") {
                    return value;
                } else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value;
                } else if (value.lastName.toLowerCase().includes(searchTerm)) {
                    return value;
                }
    })}/>
        </div>
    );
}
export default StudentInfoSection;
  