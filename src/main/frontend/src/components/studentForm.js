import React from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';

class StudentForm extends React.Component {
    
    // Traditional way of handling state
    constructor(props) {
        super(props)
    
        this.state = {
            lastName: '',
            firstName: '',
            major: ''
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
                <Form onSubmit={this.handleAddStudentSubmitted}>
                    <Form.Group className="mb-3" id="firstName">
                        <Form.Label>First Name (English Letter only)</Form.Label>
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

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Add
                    </Button>


                </Form>
            </div>
        );
    }
    handleAddStudentSubmitted = (event) => {
        // Check user response
        var answer = window.confirm(`Check your information \n\nName: ${this.state.firstName} ${this.state.lastName}\nMajor: ${this.state.major} \n\nWant to add it?`);
        // alert(`Check your information ${this.state.firstName} ${this.state.lastName} ${this.state.major}`)
        if (answer) {
            event.preventDefault();
            console.log(JSON.stringify(this.state));
            const formBody = JSON.parse(JSON.stringify(this.state));
            axios.post("http://localhost:8080/student/addStudent", formBody).then(res => {
              console.log(res); 
              alert("Successful"); 
            }).catch(err => {alert(err);});
            setTimeout(() => { 
                window.location.reload(true);
            }, 1000);
        } else {
            event.preventDefault();
        }
        
    }
    
}


export default StudentForm;