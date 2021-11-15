package com.caleb.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.caleb.demo.model.Student;

// CRUD operation implementation
public interface StudentRepo extends CrudRepository<Student, Integer>{
	// Includes all the method we need to access the database
	// See CrudRepository for detail
}
