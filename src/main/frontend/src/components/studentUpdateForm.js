import React from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';

let authToken = "";
if (localStorage.getItem("user") != null) {
    authToken = JSON.parse(localStorage.getItem("user")).accessToken;
} 
class StudentUpdateForm extends React.Component {
    
    // Traditional way of handling state
    constructor(props) {
        super(props)
    
        this.state = {
            lastName: props.lastName,
            firstName: props.firstName,
            major: props.major
        }

        this.state2 = {
            id: props.id
        }
    }
    handleFirstNameChange = (event) => {
        if(event.target.value.match("^[a-zA-Z ]*$") != null){
            this.setState({firstName: event.target.value});
        }
    }
    handleLastNameChange = (event) => {
        if(event.target.value.match("^[a-zA-Z ]*$") != null){
            this.setState({lastName: event.target.value});
        }
    }
    handleMajorChange = (event) => {
        if(event.target.value.match("^[a-zA-Z ]*$") != null){
            this.setState({major: event.target.value});
        }
    }

    render() {
        return (
            <div className="student-form">
                <Form onSubmit={this.handleUpdateStudentSubmitted}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name" required type="name" value={this.state.firstName} 
                        onChange={this.handleFirstNameChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last Name" required value={this.state.lastName} onChange={this.handleLastNameChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Major</Form.Label>
                        <Form.Control placeholder="Major" required value={this.state.major} onChange={this.handleMajorChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>


                </Form>
            </div>
        );
    }
    handleUpdateStudentSubmitted = (event) => {
        var answer = window.confirm(`The information below will be updated for student \nID: ${this.state2.id}\nFirst Name: ${this.state.firstName}\nLast Name: ${this.state.lastName} \nMajor: ${this.state.major} \n\nProceed?`);
        if (answer) {
            event.preventDefault();
            console.log(JSON.stringify(this.state));
            const formBody = JSON.parse(JSON.stringify(this.state));
            axios.put(`http://localhost:8080/student/updateStudent/${this.state2.id}`, formBody,  { headers: {"Authorization" : `Bearer ${authToken}`} }).then(res => {
            console.log(res);  
            }).catch(err => {console.log(err);});

            // Make sure the http request has enough time to be sent
            setTimeout(() => { window.location.reload(true); }, 1000);
        } else {

        }
        
    }
    
}


export default StudentUpdateForm;