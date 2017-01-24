package com.asrar.springboot.SpringBootStandAloneExample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan("com.asrar.springboot.SpringBootStandAloneExample")
public class SpringBootStandAloneApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootStandAloneApp.class, args);
	}
}
