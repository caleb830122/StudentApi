package com.caleb.demo.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.caleb.demo.model.Student;
import com.caleb.demo.service.StudentService;


@CrossOrigin
@RestController
public class StudentController {

	// Spring injects Student Service when controller is created
	@Autowired
	StudentService studentService;
	
	@RequestMapping("/")
	public String home() {
		return "home.jsp";	
	}
	
//	@RequestMapping("/addStudent")
//	public String addStudent(Student student) {
//		repo.save(student);
//		return "home.jsp";
//	}
	
	
	/**
	 * Mapping for request to get all students from the database
	 * @return ResponseEntity for HTTP request response
	 * 
	 */
	@GetMapping("/student/getAllStudents")
	public ResponseEntity<List<Student>> getAllStudent() {
		return ResponseEntity.ok().body(studentService.getAllStudent());
	}
	
	@GetMapping("/student/getStudentByID/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable int id) {
		return ResponseEntity.ok().body(studentService.getStudent(id));
	}
	
	// Practice how to change the response status code
	
	// What component is doing the conversion from JSON to object within our code????
	@PostMapping("/student/addStudent")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
		
		// By changing the ResponseEntity.ok() to .created, 
		return ResponseEntity.created(null).body(studentService.addStudent(student));	
	}

	@PutMapping("/student/updateStudent/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student student) {
		student.setId(id);
		return ResponseEntity.ok().body(studentService.updateStudent(student));
	}
	
	//Question mark ? wildcard object mark
	@DeleteMapping("/student/deleteStudent/{id}")
	public HttpStatus deleteStudent(@PathVariable int id) {
		studentService.deleteStudent(id);
		return HttpStatus.OK;
	}
	
	@DeleteMapping("/student/deleteStudents/{ids}")
	public HttpStatus deleteStudents(@PathVariable("ids") List<String> ids) {
		ids.forEach(d -> {
			if(studentService.existByid(Integer.parseInt(d))) {
				studentService.deleteStudent(Integer.parseInt(d));
			}
			
		});
		
		return HttpStatus.OK;
	}
	
	@GetMapping("/student/getStudentCount")
	public ResponseEntity<?> getStudentCount() {
		return ResponseEntity.ok().body(studentService.getStudentCount());
	}
	
	@GetMapping("/student/getStudentsByFirstName")
	public ResponseEntity<?> getStudentByFirstName() {
		return ResponseEntity.ok().body(studentService.getStudentInOrderByName());
	}
	
	
}
