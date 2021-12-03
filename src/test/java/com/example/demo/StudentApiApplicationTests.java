package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.intThat;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import ch.qos.logback.classic.spi.PackagingDataCalculator;


/**
 * Simple toy test for practicing
 * @author calebchang
 *
 */
//@SpringBootTest
class StudentApiApplicationTests {

    Calculator test = new Calculator();
	
	@Test
	void itShouldAddNumbers() {
		// given
		int num1 = 20;
		int num2 = 23;
		
		// when
		
		int result = test.add(num1, num2);
		
		// then 
		assertThat(result).isEqualTo(43);
	}
	
	class Calculator {
		int add(int a, int b) {
			return a + b;
		}
	}

}
