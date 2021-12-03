package com.caleb.demo.dao;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.booleanThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.caleb.demo.model.Student;

import javassist.expr.NewArray;

@DataJpaTest
class StudentRepoTest {

	@Autowired
	private StudentRepo underTest;
	private Student student1;
	@BeforeEach
	void setUp() {
		student1.setFirstName("Caleb");
		student1.setLastName("Chang");
		student1.setMajor("CS");
	}
	
	
	@Test
	void itShouldCheckIfStudentAdded() {
		underTest.save(student1);
		
		
		boolean exists = underTest.existsById(1);
		
		
		assertThat(exists).isTrue();
	}
	
	@Test
	void itShouldCheckIfStudentDeleted() {
		underTest.save(student1);

		underTest.delete(student1);
		
	
		boolean exists = underTest.existsById(1);
		
		
		assertThat(exists).isFalse();
	}

}
