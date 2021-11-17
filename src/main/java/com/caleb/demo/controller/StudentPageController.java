package com.caleb.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller for the webpage
 * TODO Connect to a React project
 * @author calebchang
 *
 */
@Controller
public class StudentPageController {
	
	@RequestMapping(value = "/student")
	public String home() {
		return "home.jsp";
	}
}
