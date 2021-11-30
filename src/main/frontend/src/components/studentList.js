import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button, Image } from 'react-bootstrap';
import { Input } from 'semantic-ui-react'
import Popup from './popup'
import editButtonImg from '../images/edit.png'


// Student List  
const StudentList = () => {
    // const [stateStudent, setStudentState] = useState([]);

    const [studentProfiles, setStudentProfiles] = useState([]);
    const fetchAllStudent = () => {
        axios.get("http://localhost:8080/student/getAllStudents").then(res => {
          console.log(res);
          // set userProfile state object with response data
          setStudentProfiles(res.data.map(d => {
              return {
                  select: false,
                  id: d.id,
                  firstName: d.firstName,
                  lastName: d.lastName,
                  major: d.major
              }
          }))
        });
    };

    useEffect(() => {
        fetchAllStudent();
    }, []);
    
    // useState hook for searching
    const [searchTerm, setSearchTerm] = useState("");
    
    const deleteStudentByIds = () => {
        let arrayids = [];
        studentProfiles.forEach(d => {
          if (d.select) {
            arrayids.push(d.id);
          }
        });
        // console.log(arrayids);
        // console.log(`http://localhost:8080/student/${arrayids}`)
        axios
          .delete(`http://localhost:8080/student/deleteStudents/${arrayids}`)
          .then(data => {
            console.log(data);
            fetchAllStudent();
          })
          .catch(err => alert(err));
      };



    return (
        <div className="student-search-page">
            <div>
                <h2>Student List</h2>
            </div>
            <div className="studentList-search-box">
                <Input icon="search" placeholder="Search student name..." onChange={(event) => setSearchTerm(event.target.value)} />
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => {
                    deleteStudentByIds();
                    }}
                >Delete selected</button>
            </div>
        <div className="student-list">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Major</th>
                <th>Edit</th>
                <th><input type="checkbox" 
                    onChange={e => {
                        let value = e.target.checked;
                        setStudentProfiles(
                            studentProfiles.map(d => {
                                d.select = value;
                                return d;
                            })
                        )
                    }}
                /></th>
                </tr>
            </thead>
            <tbody>
                <Students 
                studentProfiles={studentProfiles.filter((value) => {
                    if (searchTerm === "") {
                        return value;
                    } else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    } else if (value.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                })}

                setStudentProfiles={setStudentProfiles}
                />
            </tbody> 
            </Table>
        </div>
        </div>
    );
}

// Each row of the student profile
const Students = ({studentProfiles, setStudentProfiles}) => {  
    return studentProfiles.map(d => {
      
      return (
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.firstName} {d.lastName}</td>
            <td>{d.major}</td>
            <td><EditButton idFromParent={d.id} firstNameFromParent={d.firstName} 
                            lastNameFromParent={d.lastName} majorFromParent={d.major}/></td>
            <td>
                <input  
                    type="checkbox" 
                    checked={d.select}
                    onChange={e => {
                        let value = e.target.checked;
                        setStudentProfiles(
                            studentProfiles.map(sd => {
                                if (sd.id === d.id) {
                                    sd.select = value
                                }
                                return sd;
                            })
                        )
                   }}
                />
            </td>
        </tr>
      )
    });
  };
  
const EditButton = ( { idFromParent , firstNameFromParent, lastNameFromParent, majorFromParent} ) => { 
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Button className="update-btn" variant="light" size="sm" onClick={() =>setButtonPopup(true)}><Image src={editButtonImg} width="20px" height="20px"/></Button>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} id={idFromParent} firstName={firstNameFromParent} lastName={lastNameFromParent} major={majorFromParent}>
            </Popup>
        </div>
        
    );  
}

// Root component for this student search and display page
// const StudentInfoSection = () => {
    // const [studentProfiles, setStudentProfiles] = useState([]);
    // const fetchAllStudent = () => {
    //     axios.get("http://localhost:8080/student/getAllStudents").then(res => {
    //       console.log(res);
    //       // set userProfile state object with response data
    //       setStudentProfiles(res.data)
    //     });
    // };

    // useEffect(() => {
    //     fetchAllStudent();
    // }, []);
    
    // useState hook for searching
    // const [searchTerm, setSearchTerm] = useState("");    
    // return (
    //     <div className="student-search-page">
    //         <div>
    //             <h2>Student List</h2>
    //         </div>
    //         <div className="studentList-search-box">
    //             <Input icon="search" placeholder="Search student name..." onChange={(event) => setSearchTerm(event.target.value)} />
    //         </div>
    //         <StudentList />
    //     </div>
    // );
// }
export default StudentList;
  