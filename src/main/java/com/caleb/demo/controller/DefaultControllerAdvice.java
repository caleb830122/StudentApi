package com.caleb.demo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.caleb.demo.exception.ResourceNotFoundException;
import com.caleb.demo.exception.RestApiError;

@ControllerAdvice
public class DefaultControllerAdvice {
	
	// Handle the behavior when ResourceNotFoundException is thrown
	@ExceptionHandler(ResourceNotFoundException.class)
	protected ResponseEntity<Object> handleResourceNotFound(ResourceNotFoundException ex, HttpServletRequest request){
		RestApiError apiError = new RestApiError(HttpStatus.NOT_FOUND, "Student not found", ex.getMessage());
		return new ResponseEntity<>(apiError, apiError.getHttpStatus());
	}
	
}
