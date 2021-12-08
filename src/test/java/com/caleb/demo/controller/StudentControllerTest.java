package com.caleb.demo.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.intThat;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import org.apache.tomcat.util.http.parser.MediaType;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.plugins.MockMaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.caleb.demo.dao.StudentRepo;
import com.caleb.demo.model.Student;
import com.caleb.demo.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;

import antlr.collections.List;
import ch.qos.logback.core.status.Status;

// addFilters to disable redirect by security feature
@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(StudentController.class)
public class StudentControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	// Perform POJO and JSON conversion
	@Autowired
	private ObjectMapper objectMapper;
	
	@MockBean
	private StudentService service;
	
	@MockBean
	private StudentRepo repo;
	
	private StudentController studentController;
	
	@Test
	public void testHome() throws Exception {
		studentController = new StudentController();
		String testReturnString = "home.jsp";
		
		assertThat(studentController.home()).isEqualTo(testReturnString);
	}
	
	@Test
	public void testGetAllStudents() throws Exception {
		
		// Construct mocked student list
		ArrayList<Student> studentList = new ArrayList<>();
		Student student1 = new Student();
		Student student2 = new Student();
		student1.setId(1);
		student1.setFirstName("Caleb");
		student1.setLastName("Caleb");
		student1.setMajor("CS");
		student2.setId(2);
		student2.setFirstName("Troy");
		student2.setLastName("Taylor");
		student2.setMajor("Business");
		
		studentList.add(student1);
		studentList.add(student2);
		
		// Mock return from service
		Mockito.when(service.getAllStudent()).thenReturn(studentList);
		final String expectedResponseJson = objectMapper.writeValueAsString(studentList);
		
		
		String url = "/student/getAllStudents";
		mockMvc.perform(MockMvcRequestBuilders.get(url))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.content().json(expectedResponseJson));
		
		verify(service).getAllStudent();	
	}
	
	
	@Test
	public void testGetStudent() throws Exception {
		Student student1 = new Student();
		int sid = 1;
		student1.setId(sid);
		student1.setFirstName("Caleb");
		student1.setLastName("Caleb");
		student1.setMajor("CS");
		
		Mockito.when(service.getStudent(sid)).thenReturn(student1);
		final String expectedResponseJson = objectMapper.writeValueAsString(student1);
		
		String url = "/student/getStudentByID/" + sid;
		mockMvc.perform(MockMvcRequestBuilders.get(url))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.content().json(expectedResponseJson));
		
		verify(service).getStudent(sid);
	}
	
	@Test
	@Disabled
	public void testAddStudent() throws Exception {
		Student student1 = new Student();
		int sid = 1;
		student1.setId(sid);
		student1.setFirstName("Caleb");
		student1.setLastName("Caleb");
		student1.setMajor("CS");
		
		Mockito.when(service.addStudent(student1)).thenReturn(student1);
		final String expectedResponseJson = objectMapper.writeValueAsString(student1);
		
		String url = "/student/addStudent/";
		mockMvc.perform(MockMvcRequestBuilders.post(url))
		.andExpect(status().isCreated())
		.andExpect(MockMvcResultMatchers.content().json(expectedResponseJson));
		
		verify(service).addStudent(student1);
	}
}



//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class StudentControllerTest {
//
//	@Autowired
//	private MockMvc mockMvc;
//	
//	@InjectMocks
//	private StudentController studentController;
//	
//	@Before
//	public void setUp() throws Exception {
//		mockMvc = MockMvcBuilders.standaloneSetup(studentController).build();
//	}
//	
//	@Test
//	void testHome() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/"))
//		.andExpect(MockMvcResultMatchers.status().isOk())
//		.andExpect(MockMvcResultMatchers.content().string("home.jsp"));
//	}
//	
//	@Test
//	void testGetAllStudents() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/student/getAllStudents"))
//		.andExpect(status().isOk())
//		.andReturn()
////		.andExpect(MockMvcResultMatchers.content().)
//	}
//	
//	
//
//}
