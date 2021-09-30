package com.test.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.test.blog.service.BoardService;

@Controller
public class GitController {
	
	
	@Autowired
	private BoardService boardService;

	@GetMapping("/git")
	public String git() {
	
		return"git";
	}
	
	@GetMapping("/git/git1")
	public String git1() {
		return"git/git1";
	}

}
