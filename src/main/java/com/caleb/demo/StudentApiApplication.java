package com.caleb.demo;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.caleb.demo.appuser.User;
import com.caleb.demo.appuser.Authority;
import com.caleb.demo.dao.UserDetailRepo;

@SpringBootApplication
public class StudentApiApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDetailRepo userDetailRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(StudentApiApplication.class, args);
	}

	
	@PostConstruct
	protected void initialize() {
		List<Authority> authorities = new ArrayList<>();
		
		authorities.add(createAuthority("USER", "User role"));
		authorities.add(createAuthority("ADMIN", "Admin role"));
		User user = new User();
		
		user.setUserName("caleb0122");
		user.setFirstName("Caleb");
		user.setLastName("Chang");
		
		user.setPassword(this.passwordEncoder.encode("Box@1234"));
		user.setEnabled(true);
		user.setAuthorities(authorities);
		
		userDetailRepo.save(user);
	}
	
	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}
}
