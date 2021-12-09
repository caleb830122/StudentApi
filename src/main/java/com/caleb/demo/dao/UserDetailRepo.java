package com.caleb.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.caleb.demo.appuser.User;

@Repository
public interface UserDetailRepo extends JpaRepository<User, Long> {
	
	User findByUserName(String userName);
}
