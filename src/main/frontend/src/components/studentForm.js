import React from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';

class StudentForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            lastName: '',
            firstName: '',
            major: ''
        }
    }
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value});
    }
    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value});
    }
    handleMajorChange = (event) => {
        this.setState({ major: event.target.value});
    }

    render() {
        return (
            <div className="student-form">
                <Form onSubmit={this.handleAddStudentSubmitted}>
                    <Form.Group className="mb-3" id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name" required value={this.state.firstName} onChange={this.handleFirstNameChange}/>
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
        // for testin purpose  
        alert(`Check your information ${this.state.firstName} ${this.state.lastName} ${this.state.major}`)
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        const formBody = JSON.parse(JSON.stringify(this.state));
        axios.post("http://localhost:8080/student/addStudent", formBody).then(res => {
          console.log(res);  
        });
        window.location.reload(true);
    }
    
}


export default StudentForm;