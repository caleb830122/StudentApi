package com.caleb.demo.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

// Set status code of an HTTP response for Spring MVC

@ResponseStatus
public class ResourceNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String message) {
		super(message);
	}
	
	public ResourceNotFoundException(String message, Throwable throwable) {
		super(message, throwable);
	}
	
}
