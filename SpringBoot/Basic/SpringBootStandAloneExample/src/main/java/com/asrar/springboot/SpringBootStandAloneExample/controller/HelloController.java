package com.asrar.springboot.SpringBootStandAloneExample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

	@RequestMapping("/")
	String home(ModelMap map) {
		map.addAttribute("title", "Dear Learner");
		map.addAttribute("message", "Welcome to SpringBootkulle");
		return "hello";
	}
}
