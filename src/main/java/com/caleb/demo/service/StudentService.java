package com.caleb.demo.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Collections;
import java.util.Comparator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.caleb.demo.dao.StudentRepo;
import com.caleb.demo.exception.ResourceNotFoundException;
import com.caleb.demo.model.Student;

import lombok.AllArgsConstructor;

// Scan this class as a service
@AllArgsConstructor
@Service
@Transactional
public class StudentService {
	
	@Autowired
	private StudentRepo repo;
	
	public StudentService(StudentRepo studentRepo) {
		repo = studentRepo;
	}

	/**
	 * Add a new student into database
	 * CREATE
	 * @param student
	 * @return Student object
	 */
	public Student addStudent(Student student) {
		return repo.save(student);
	}
	
	/**
	 * Get a student by its ID
	 * READ
	 * @param id
	 * @return
	 */
	public Student getStudent(int id) {
		Optional<Student> studentInDB = repo.findById(id);
		
		if (studentInDB.isPresent()) {
			return studentInDB.get();
		} else {
			throw new ResourceNotFoundException("Student with id:" + id + "is not exist");
		}
	}
	
	public List<Student> getAllStudent(){
		return (List<Student>) repo.findAll();
	}
	
	/**
	 * Update a student with matched student ID
	 * UPDATE
	 * @param student
	 * @return Student Object
	 */
	public Student updateStudent(Student student) {
		Optional<Student> studentInDB = repo.findById(student.getId());
		
		// Check if a Student can be found in database by its ID
		// If exist, update the attributes
		if (studentInDB.isPresent()) {
			Student studentUpdate = studentInDB.get();
			studentUpdate.setId(student.getId());
			studentUpdate.setFirstName(student.getFirstName());
			studentUpdate.setLastName(student.getLastName());
			studentUpdate.setMajor(student.getMajor());
			repo.save(studentUpdate);
			return studentUpdate;
		} else {
			throw new ResourceNotFoundException("Student not exist:" + student.getId());
		}
	}
	
	/**
	 * Delete a student by providing the id
	 * DELETE
	 * @param id
	 */
	public void deleteStudent(int id) {
		Optional<Student> studentInDB = repo.findById(id);
		if (studentInDB.isPresent()) {
			repo.deleteById(id);
		} else {
			throw new ResourceNotFoundException("Student with id: " + id + " is not exist");
		}
	}
	
	public StudentRepo getRepo() {
		return this.repo;
	}

	/**
	 * Check if an id is exist in database
	 * @param parseInt id
	 * @return boolean true if the student id exist in the database
	 */
	public boolean existByid(int id) {
		return repo.existsById(id);
	}
	
	public Integer getStudentCount() {
		return (int) repo.count();
	}
	
	
	/**
	 * Get all students from the database by the order of first name
	 * @return Sorted list of student by first name
	 */
	public List<Student> getStudentInOrderByFirstName() {
		List<Student> tempList = (List<Student>) repo.findAll();
		Collections.sort(tempList, Student.StudentFirstNameComparator);
		
		return tempList;
	}
	
	/**
	 * Get all students from the database by the order of Last name
	 * @return Sorted list of student by first name
	 */
	public List<Student> getStudentInOrderByLastName() {
		List<Student> tempList = (List<Student>) repo.findAll();
		Collections.sort(tempList, Student.StudentLastNameComparator);
		
		return tempList;
	}
	
	/**
	 * Get all students from the database by the order of Last name
	 * @return Sorted list of student by first name
	 */
	public List<Student> getStudentInOrderByMajor() {
		List<Student> tempList = (List<Student>) repo.findAll();
		Collections.sort(tempList, Student.StudentMajorComparator);
		
		return tempList;
	}
	
	
		
}
