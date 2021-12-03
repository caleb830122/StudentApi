package com.caleb.demo.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.caleb.demo.dao.StudentRepo;
import com.caleb.demo.exception.ResourceNotFoundException;
import com.caleb.demo.model.Student;

class StudentServiceTest {

	@Mock private StudentRepo studentRepo;
	private AutoCloseable autoCloseable;
	private StudentService underTest;
	
	@BeforeEach
	void setUp() {
		autoCloseable = MockitoAnnotations.openMocks(this);
		underTest = new StudentService(studentRepo);
	}
	
	@AfterEach
	void tearDown() throws Exception {
		autoCloseable.close();
	}
	
	@Test
	void testAddStudent() {
		// given
		Student student1 = new Student();
		student1.setFirstName("Caleb");
		student1.setLastName("Chang");
		student1.setMajor("CS");
		
		// when
		underTest.addStudent(student1);
		
		// then
		// Capture the argument being sent to the repo is the same as the one 
		// we passed to the service, if match then successful
		ArgumentCaptor<Student> studentArgumentCaptor = 
				ArgumentCaptor.forClass(Student.class);
		
		// verify is to check certain behavior happened (actually being called)
		verify(studentRepo).save(studentArgumentCaptor.capture());
		
		Student capturedStudent = studentArgumentCaptor.getValue();
		
		assertThat(capturedStudent).isEqualTo(student1);
	}

	@Test
	void testGetStudentWithException() {
		int studentId = 1;
		assertThatThrownBy(() -> {underTest.getStudent(studentId);}).isInstanceOf(ResourceNotFoundException.class)
		.hasMessage("Student with id:" + studentId + "is not exist");
	}
	
	@Test
	void testGetStudent() {
		Student student1 = new Student();
		student1.setFirstName("Caleb");
		student1.setLastName("Chang");
		student1.setMajor("CS");
		Optional<Student> mockStudentOptional = Optional.ofNullable(student1);
		doReturn(mockStudentOptional).when(studentRepo).findById(1);
		
		assertThat(underTest.getStudent(1)).isEqualTo(student1);
	}

	@Test
	void testGetAllStudent() {
		// when
		underTest.getAllStudent();
		
		// then
		verify(studentRepo).findAll();
	}

	@Test
	void testUpdateStudent() {
		// given
		Student studentUpdated = new Student();
		studentUpdated.setId(1);
		studentUpdated.setFirstName("Caleb");
		studentUpdated.setLastName("Chang");
		studentUpdated.setMajor("IT");
		
		Optional<Student> mockStudentOptional = Optional.of(studentUpdated);
		Mockito.when(studentRepo.findById(1)).thenReturn(mockStudentOptional);
		
		// when
		underTest.updateStudent(studentUpdated);
		
		// then
		// Capture the argument being sent to the repo is the same as the one 
		// we passed to the service, if match then successful
		ArgumentCaptor<Student> studentArgumentCaptor = 
				ArgumentCaptor.forClass(Student.class);
		
		// verify is to check certain behavior happened (actually being called)
		verify(studentRepo).save(studentArgumentCaptor.capture());
		
		Student capturedStudent = studentArgumentCaptor.getValue();
		
		assertThat(capturedStudent).isEqualTo(studentUpdated);	
	}

	
	@Test
	void testDeleteStudent() {
		Student student1 = new Student();
		student1.setFirstName("Caleb");
		student1.setLastName("Chang");
		student1.setMajor("CS");
		Optional<Student> mockStudentOptional = Optional.of(student1);
		Mockito.when(studentRepo.findById(1)).thenReturn(mockStudentOptional);
		
		// when
		underTest.deleteStudent(1);
		
		// then
		Mockito.verify(studentRepo).deleteById(1);
	}
	
	@Test
	void testDeleteStudentWithException() {
		int studentId = 1;
		assertThatThrownBy(() -> {underTest.deleteStudent(studentId);}).isInstanceOf(ResourceNotFoundException.class)
		.hasMessage("Student with id: " + studentId + " is not exist");
	}

	@Test
	void testGetRepo() {
		assertThat(underTest.getRepo()).isEqualTo(studentRepo);
	}

	@Test
	void testExistByid() {
		int studentId = 1;
		underTest.existByid(studentId);
	
		verify(studentRepo).existsById(studentId);
	}

	@Test
	void testGetStudentCount() {
		underTest.getStudentCount();
		
		verify(studentRepo).count();
	}

}
