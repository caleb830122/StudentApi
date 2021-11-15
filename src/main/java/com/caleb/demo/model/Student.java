package com.caleb.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;
		
		@Column(name = "lastname")
		private String lastName;
		
		@Column(name = "firstname")
		private String firstName;
		
		@Column(name = "major")
		private String major;
		

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}
	
		public String getLastName() {
			return lastName;
		}
	
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
	
		public String getFirstName() {
			return firstName;
		}
		
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		
		public String getMajor() {
			return major;
		}
		
		public void setMajor(String major) {
			this.major = major;
		}
}
