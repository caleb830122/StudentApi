package com.caleb.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.caleb.demo.appuser.User;
import com.caleb.demo.dao.UserDetailRepo;

@Service
public class AppUserService implements UserDetailsService{

	@Autowired
	UserDetailRepo userDetailRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user = userDetailRepo.findByUserName(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("User not found with userName: " + username);
		}
		return user;
	}

}
