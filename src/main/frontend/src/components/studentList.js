import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


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
            <td><EditButton dataFromParent={studentProfile.id}/></td>
        </tr>
      )
    });
  };
  
  
  
  
  class StudentList extends React.Component {
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
                <th></th>
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

class EditButton extends React.Component {
    render() {
        return (
            <div>
                <Button className="delete-btn" variant="danger" size="sm" onClick={() => handleDelete(this.props.dataFromParent)}>Delete</Button>
                <Button className="update-btn" variant="success" size="sm">Update</Button>
            </div>
            
        );
    }
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

export default StudentList;
  