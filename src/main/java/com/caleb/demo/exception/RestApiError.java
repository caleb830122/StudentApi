package com.caleb.demo.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.http.HttpStatus;

// For some reason lombok is not working here, so constructor, getter and setter are created
// manually
@Data
@AllArgsConstructor
@ToString
public class RestApiError {

	HttpStatus httpStatus;

    String errorMessage;

    String errorDetails;

    public RestApiError(HttpStatus httpStatus, String message, String details) {
		this.httpStatus = httpStatus;
		this.errorMessage = message;
		this.errorDetails = details;
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorDetails() {
		return errorDetails;
	}

	public void setErrorDetails(String errorDetails) {
		this.errorDetails = errorDetails;
	}
}